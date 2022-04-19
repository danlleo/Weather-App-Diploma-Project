import React from "react";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search/Search";
import WeatherData from "./components/WeatherData/WeatherData";
import { PuffLoader } from "react-spinners";
import { useSelector } from "react-redux";
import "./index.css";

const App = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dataContainer = () => {
    return (
      <>
        {error ? (
          <div style={{ marginTop: "4rem" }}>
            <img
              src="https://thedigify.com/image/no-search-found.png"
              alt="not found"
            />
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
