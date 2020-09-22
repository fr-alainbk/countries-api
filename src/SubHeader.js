import React, { useState } from "react";
import "./SubHeader.css";

function SubHeader({ setChoice, setIsLoading, setRegion, region }) {
  const [country, setCountry] = useState("");

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const onRegionChange = (e) => {
    setRegion(e.target.value);
    console.log(region);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setChoice(country);
      setIsLoading(true);
    }
  };

  return (
    <div className="subHeader">
      <div className="subHeader__left">
        <i className="fas fa-search subHeader__icon"></i>
        <input
          onChange={onCountryChange}
          onKeyPress={(e) => handleKeyPress(e)}
          value={country}
          type="text"
          placeholder="Search for a country..."
          name="country-search"
        />
      </div>
      <div className="subHeader__right">
        <label htmlFor="regions"></label>
        <select
          onChange={(e) => onRegionChange(e)}
          value={region}
          name="regions"
          id="regions"
        >
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SubHeader;
