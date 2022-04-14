import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import "./ForecastItem.css";

const ForecastItem = () => {
  return (
    <div className="forecast-item">
      <div className="forecast-item__time">
        <p>Time</p>
      </div>
      <div className="forecast-item__container">
        <FontAwesomeIcon
          icon={faSnowflake}
          size="2x"
          style={{ marginBottom: "1rem" }}
        />
        <h4 style={{fontSize: "24px"}}>1°</h4>
      </div>
    </div>
  );
};

export default ForecastItem;
