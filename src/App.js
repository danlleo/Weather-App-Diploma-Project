import React from "react";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherData from "./components/WeatherData/WeatherData";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Search />
      <Forecast />
      <WeatherData />
    </div>
  );
};

export default App;
