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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <h3
              style={{
                marginBottom: ".5rem",
                fontWeight: "400",
                fontSize: "24px",
              }}
            >
              Today
            </h3>
            <p style={{ fontSize: "14px" }}>Wed, 17 Feb</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSnowflake} size="3x" />
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
