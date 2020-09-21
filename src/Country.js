import React from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import "./Country.css";
import numeral from "numeral";
import { motion } from "framer-motion";
import { useStateValue } from "./StateProvider";

const formatNumber = (number) => {
  const numb = numeral(number);
  return numb.format();
};

function Country({ name, population, region, capital, flag }) {
  const [{ countryClicked }, dispatch] = useStateValue();

  const history = useHistory();

  const handleClick = (e) => {
    history.push("/details");
    dispatch({
      type: "CLICK_COUNTRY",
      countryClicked: e.target.name
    });
  };

  return (
    <Router>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="country"
      >
        <Link to="/details">
          <div onClick={(e) => handleClick(e)} className="country__flag">
            <img src={flag} alt="" name={name} />
          </div>
        </Link>

        <div className="country__infos">
          <div className="country__name">
            <h2>{name}</h2>
          </div>
          <div className="country__details">
            <p>Population: {formatNumber(population)}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </motion.div>
    </Router>
  );
}

export default Country;
