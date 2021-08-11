import { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Search from "../src/components/Search/Search";
import Weather from "../src/components/weather/Weather";
import "./App.css";

export default function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchWeatherData = (searchValue = null) => {
    //if is a zip run zip or q for value
    const usezipparam =
      searchValue.length === 5 ? `zip=${searchValue}` : `q=${searchValue}`;
    let URL = `https://api.openweathermap.org/data/2.5/forecast?&cnt=7&units=imperial&${usezipparam}&appid=${API_KEY}`;
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return setWeatherData(response.weatherData);
        }
        
        throw response;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
      
  };

  useEffect(() => {
    fetchWeatherData("22314");
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!...";
console.log("hola:", setWeatherData)
  return (
    <div className="main">
      <div className="title" style={{ fontSize: "4em" }}>
        <p> weather moves </p>
      </div>
      <div className="shape"></div>

      <Search setWeatherData ={weatherData} />
      <Weather title={"Current Weather"} weatherData={fetchWeatherData} />
    </div>
  );
}
