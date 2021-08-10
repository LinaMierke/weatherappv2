import { useState, useEffect } from "react";
import "./App.css";
import Search from "../src/components/Search/Search";
import Weather from "../src/components/weather/Weather";
import "./App.css";

export default function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState([]);
  const fetchWeatherData = (searchValue = null) => {
    //if is a zip run zip or q for value
    const usezipparam =
      searchValue.length === 5 ? `zip=${searchValue}` : `q=${searchValue}`;
    let URL = `https://api.openweathermap.org/data/2.5/forecast?&cnt=7&units=imperial&${usezipparam}&appid=${API_KEY}`;
    fetch(URL).
    then(async (response) => {
      try {
        const data = await response.json();
        console.log("response data?", data);
      } catch (error) {
        console.log("Error happened here!");
        console.error(error);
      }
    });
  };
  useEffect(() => {
    fetchWeatherData("22314");
  }, []);
  console.log( "data:");
  return (
    <div className="main">
      <div className="title" style={{ fontSize: "4em" }}>
        <p> weather moves </p>
      </div>
      <div className="shape"></div>

      <Search weatherData={weatherData} />
      <Weather title={"Current Weather"} weatherData={fetchWeatherData} />
    </div>
  );
}
