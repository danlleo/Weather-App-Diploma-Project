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
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res.data);
        dispatch(handleSuccess(res.data));
      })
      .catch((err) => {
        console.log("YO WTF");
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
      />
    </form>
  );
};

export default Search;
