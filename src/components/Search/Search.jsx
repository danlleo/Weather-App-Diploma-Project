import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchData,
  handleError,
  handleSuccess,
} from "../../redux/actions/weatherActions";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const clearInput = (handler) => handler("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(fetchData());

    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${search}&days=1&aqi=no&alerts=no`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(handleSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(handleError());
      });

    clearInput(setSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="E.g. New York"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default Search;
