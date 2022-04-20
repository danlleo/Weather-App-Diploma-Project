import React from "react";
import "./ForecastItem.css";

const ForecastItem = ({ time, temp, image }) => {
  const date = new Date(time);

  return (
    <div className="forecast-item">
      <div className="forecast-item__time">
        <p>{date.getHours()} AM</p>
      </div>
      <div className="forecast-item__container">
        <img
          src={image}
          alt="weather icon"
          style={{ width: "40px", height: "40px", margin: "1rem 0" }}
        />
        <h4>{Math.floor(temp)}°</h4>
      </div>
    </div>
  );
};

export default ForecastItem;
