import React from "react";

import "./Country.css";
import numeral from "numeral";
import { motion } from "framer-motion";

const formatNumber = (number) => {
  const numb = numeral(number);
  return numb.format();
};

function Country({ name, population, region, capital, flag }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="country"
    >
      <div className="country__flag">
        <img src={flag} alt="" name={name} />
      </div>
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
  );
}

export default Country;
