import { useEffect, useState } from "react";
import "./App.css";
import Search from "../src/components/Search/Search"
import Weather from "../src/components/weather/Weather"
import "./App.css";

export default function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = (searchValue = null) => {
    //if is a zip run zip or q for value
    const usezipparam =
      searchValue.length === 5 ? `zip=${searchValue}` : `q=${searchValue}`;
    let URL = `https://api.openweathermap.org/data/2.5/weather?&cnt=7&units=imperial&${usezipparam},us&appid=${API_KEY}`;
    fetch(URL)
      .then((response) => response.json())
      .then((jsonData) => setWeatherData(jsonData));
  };

  useEffect(() => {
    fetchWeatherData("22314");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="main">
      <div
        className="title"
        style={{ fontSize: "4em", fontWeight: "550", fontFamily: "Patra" }}
      >
        <a
          href="https://movesfinancial.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          weather moves
        </a>
      </div>
      <div className="content">
        <Search fetchWeatherData={fetchWeatherData} />
        <Weather title={"Current Weather"} weatherData={weatherData} />
      </div>
    </div>
  );
}
