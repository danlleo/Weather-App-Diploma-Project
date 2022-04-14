import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import "./WeatherData.css";

const WeatherData = () => {
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
            <h3>06:47am</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>sunset</h3>
          </div>
          <div className="data-list__item-data">
            <h3>5:04pm</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>precipitation</h3>
          </div>
          <div className="data-list__item-data">
            <h3>60%</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>humidity</h3>
          </div>
          <div className="data-list__item-data">
            <h3>15%</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>wind</h3>
          </div>
          <div className="data-list__item-data">
            <h3>17 km/h</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>pressure</h3>
          </div>
          <div className="data-list__item-data">
            <h3>1021 hPa</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>feels like</h3>
          </div>
          <div className="data-list__item-data">
            <h3>26.6°</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
        <div className="data-list__item">
          <div className="data-list__item-about">
            <h3>visibility</h3>
          </div>
          <div className="data-list__item-data">
            <h3>50km</h3>
            <FontAwesomeIcon
              icon={faSun}
              style={{ color: "#27485C", fontSize: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
