import React from "react";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiWindy,
  WiThermometer,
  WiRaindrop,
  WiDust,
} from "react-icons/wi";
import { useSelector } from "react-redux";
import { MdRemoveRedEye } from "react-icons/md";
import "./WeatherData.css";

const WeatherData = () => {
  const weatherData = useSelector((state) => state.data);

  return (
    <div className="data-container">
      <div className="data-container__header">
        <h3
          style={{
            color: "var(--main-color)",
            fontWeight: "400",
            fontSize: "24px",
          }}
        >
          Weather Details
        </h3>
      </div>
      <div className="data-list">
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>sunrise</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.forecast?.forecastday[0]?.astro?.sunrise}</h3>
            <WiSunrise />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>sunset</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.forecast?.forecastday[0]?.astro?.sunset}</h3>
            <WiSunset />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>precipitation</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.precip_mm}%</h3>
            <WiRaindrop />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>humidity</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.humidity}%</h3>
            <WiHumidity />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>wind</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.wind_kph} km/h</h3>
            <WiWindy />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>pressure</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.pressure_mb} hPa</h3>
            <WiDust />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>feels like</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.feelslike_c}°</h3>
            <WiThermometer />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>visibility</h3>
          </div>
          <div className="data-list__item-data">
            <h3>{weatherData?.current?.vis_km} km</h3>
            <MdRemoveRedEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
