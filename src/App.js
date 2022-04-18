import React from "react";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherData from "./components/WeatherData/WeatherData";
import { useSelector } from "react-redux";
import "./index.css";

const App = () => {
  const loading = useSelector((state) => state.loading);
  
  return (
    <div className="container">
      <Search />
      {loading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <Forecast />
          <WeatherData />
        </>
      )}
    </div>
  );
};

export default App;
