import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
import { useSelector } from "react-redux";
import "./Forecast.css";

const Forecast = () => {
  const weatherData = useSelector((state) => state.data);

  return (
    <div className="forecast-container">
      <div className="forecast-container__current">
        <div className="forecast-container__current__date">
          <div className="forecast-container__current__date__day">
            <h3>Today</h3>
            <p>{weatherData?.current?.condition?.text}</p>
          </div>
          <div>
            <img
              src={weatherData?.current?.condition?.icon}
              alt="weather icon"
              style={{ width: "90px", height: "90px" }}
            />
          </div>
        </div>
        <div className="forecast-container__current__temp">
          <h1>{Math.floor(weatherData?.current?.temp_c)}°</h1>
        </div>
        <div className="forecast-container__current__place">
          <h2>{weatherData?.location?.name}</h2>
        </div>
      </div>
      <div className="forecast-container__list">
        {[...Array(7)].map((item, counter) => (
          <ForecastItem
            time={weatherData?.forecast?.forecastday[0]?.hour[counter]?.time}
            temp={weatherData?.forecast?.forecastday[0]?.hour[counter]?.temp_c}
            image={
              weatherData?.forecast?.forecastday[0]?.hour[counter]?.condition
                ?.icon
            }
            key={counter}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
