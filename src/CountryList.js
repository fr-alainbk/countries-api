import React, { useState, useEffect } from "react";
import Country from "./Country";
import axios from "axios";
import "./CountryList.css";

function CountryList({ selectedCountry, setIsLoading, isLoading, selectedRegion }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(data);
    };

    getCountries();
  }, [setCountries]);

  useEffect(() => {
    const getCountry = async () => {
      if (selectedCountry === "") {
        const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
        setCountries(data);
        setIsLoading(false);
      } else {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/name/${selectedCountry}`
        );

        setCountries(data);
        setIsLoading(false);
      }
    };

    getCountry();
  }, [selectedCountry, setIsLoading]);

  useEffect(() => {
    const getRegion = async () => {
      if (selectedRegion === "") {
        const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

        setCountries(data);
        setIsLoading(false);
      } else {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/region/${selectedRegion}`
        );

        setCountries(data);
        setIsLoading(false);
      }
    };

    getRegion();
  }, [selectedRegion, setIsLoading]);

  return (
    <div className="countryList">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        countries.map((country) => (
          <Country
            key={country.numericCode}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))
      )}
    </div>
  );
}

export default CountryList;
