import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <div className="forecast-container__current">
        <div className="forecast-container__current__date">
          <div className="forecast-container__current__date__day">
            <h3>Today</h3>
            <p>Wed, 17 Feb</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSnowflake} size="4x" />
          </div>
        </div>
        <div className="forecast-container__current__temp">
          <h1>2°</h1>
        </div>
        <div className="forecast-container__current__place">
          <h2>Cracow, Poland</h2>
        </div>
      </div>
      <div className="forecast-container__list">
        {[...Array(7)].map(() => (
          <ForecastItem />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
