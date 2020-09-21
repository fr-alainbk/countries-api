import React, { useState } from "react";
import "./SubHeader.css";

function SubHeader({ setChoice, setIsLoading, setRegion, region }) {
  const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("");

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const onRegionChange = (e) => {
    setRegion(e.target.value);
    console.log(region);
  };

  // console.log(country);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log(">>>", country);
      setChoice(country);
      setIsLoading(true);
    }
  };

  return (
    <div className="subHeader">
      <div className="subHeader__left">
        <i className="fas fa-search"></i>
        <input
          onChange={onCountryChange}
          onKeyPress={(e) => handleKeyPress(e)}
          value={country}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="subHeader__right">
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
