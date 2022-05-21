import React, { useEffect } from "react";
import axios from "axios";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherData from "./components/WeatherData/WeatherData";
import { PuffLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  fetchData,
  handleError,
  handleSuccess,
} from "./redux/actions/weatherActions";

const App = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const defaultCity = useSelector((state) => state.defaultCity);

  const dispatch = useDispatch();

  const getWeatherData = async () => {
    dispatch(fetchData());

    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${defaultCity}&days=1&aqi=no&alerts=no`
      )
      .then((res) => {
        dispatch(handleSuccess(res.data));
      })
      .catch(() => {
        dispatch(handleError());
      });
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const dataContainer = () => {
    return (
      <>
        {error ? (
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <h1 style={{ color: "var(--main-color)" }}>City Not Found</h1>
            <h4 style={{ color: "var(--main-muted-color)", marginTop: ".5rem" }}>
              Try look for another one
            </h4>
          </div>
        ) : (
          <>
            <Forecast />
            <WeatherData />
          </>
        )}
      </>
    );
  };

  return (
    <div className="container">
      <Search />
      {loading ? (
        <div style={{ marginTop: "4rem" }}>
          <PuffLoader color={"var(--main-color)"} />
        </div>
      ) : (
        dataContainer()
      )}
    </div>
  );
};

export default App;
