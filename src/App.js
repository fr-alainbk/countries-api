import React, { useState } from "react";

import "./App.css";
import CountryList from "./CountryList";
import Header from "./Header";
import SubHeader from "./SubHeader";

//https: restcountries.eu/rest/v2/region/europe

function App() {
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("");

  // console.log(countryClicked);
  return (
    <div className="App">
      <Header />

      <SubHeader
        setChoice={setCountry}
        setIsLoading={setIsLoading}
        setRegion={setRegion}
        region={region}
      />
      <CountryList
        selectedCountry={country}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        selectedRegion={region}
      />
    </div>
  );
}

export default App;
