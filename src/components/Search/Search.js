import React from "react";
import { useState } from "react";
import "./search.css";

export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.fetchWeatherData(searchValue);
  };
  return (
    <div>
      <h2>Enter city or zip code</h2>
      <input type="text" placeholder="zip or city" onChange={handleInput} />
      <button className="button" style={{}} onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
