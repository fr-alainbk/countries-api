import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import CountryList from "./CountryList";
import Header from "./Header";
import SubHeader from "./SubHeader";
import CountryDetails from "./CountryDetails";
import Footer from "./Footer";

function App() {
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("");

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
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
          </Route>

          <Route path="/details" exact>
            <CountryDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
