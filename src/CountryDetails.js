import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import "./CountryDetails.css";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import numeral from "numeral";

const formatNumber = (number) => {
  const numb = numeral(number);
  return numb.format();
};

function CountryDetails() {
  const [{ countryClicked }, dispatch] = useStateValue();
  const [countryInfos, setCountryInfos] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getAllCountries = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setAllCountries(data);
    };
    getAllCountries();
  }, []);

  useEffect(() => {
    const getDetails = async (countryName) => {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${countryName}`
      );
      setCountryInfos(data);
    };

    getDetails(countryClicked);
  }, []);

  console.log(countryInfos);

  const handleClick = () => {
    history.push("/");
  };

  const getCountryFromCode = (code) => {
    const result = allCountries.filter((cnt) => cnt.alpha3Code === code);
    const final = result.map((res) => res.name);
    console.log("edjdiejeijd", final[0]);
    return final[0];
  };

  return (
    <Router>
      <div>
        <Link to="/">
          <button onClick={handleClick} className="countryDetails__button">
            <i className="fas fa-arrow-left countryDetails__arrow"></i>
            Back
          </button>
        </Link>
        {countryInfos.map((cnt) => (
          <div key={cnt.numericCode} className="countryDetails">
            <div className="countryDetails__up">
              <div className="countryDetails__flag">
                <img src={cnt.flag} alt="" />
              </div>
              <div className="countryDetails__right">
                <div className="countryDetails__right1">
                  <h1>{cnt.name}</h1>
                  <p>Native name: {cnt.nativeName}</p>
                  <p>Population: {formatNumber(cnt.population)} </p>
                  <p>Region: {cnt.region} </p>
                  <p>Sub Region: {cnt.subregion} </p>
                  <p>Capital: {cnt.capital}</p>
                </div>
                <div className="countryDetails__right2">
                  <p>Top Level Domain: {cnt.topLevelDomain}</p>
                  <p>Currencies: {cnt.currencies[0].name}</p>
                  <span>
                    Languages:{" "}
                    {cnt.languages.map((lang) => (
                      <p key={lang.name} className="country__languages">
                        {`${lang.name} /`}
                      </p>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="countryDetails__bottom">
              Border Countries:
              {cnt.borders.map((border) => (
                <button className="countryDetails__border" key={border}>
                  {getCountryFromCode(border)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default CountryDetails;
