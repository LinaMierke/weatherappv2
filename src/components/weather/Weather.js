import React, { useState, useEffect } from "react";
import Days from "./Days";
import "./weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureLow,
  faTemperatureHigh,
  faRainbow,
  faTint,
  // faWater,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    setCurrentWeather(props.weatherData);
  }, [props.weatherData]);

  let weatherDescription = 0;
  let currentTemprature = 0;
  let minTemprature = 0;
  let maxTemprature = 0;
  let windSpeed = 0;
  let location = 0;
  // let precipitation = 0;
  let humidity = 0;
  if (currentWeather.hasOwnProperty("main")) {
    location = currentWeather.name;
    weatherDescription = currentWeather.weather[0].description;
    currentTemprature = currentWeather.main.temp;
    windSpeed = currentWeather.wind.speed;
    minTemprature = currentWeather.main.temp_min;
    maxTemprature = currentWeather.main.temp_max;
    humidity = currentWeather.main.humidity;
  }

  return (
    <div className="content">
      <div className="card">
        <div style={{ fontSize: "24px" }}>{location}</div>
        <br />
        <div style={{ fontSize: "64px", fontWeight: "600" }}>
          {currentTemprature}˚
        </div>
        <br />
        <div>
          <FontAwesomeIcon icon={faRainbow} />
          <br />
          {weatherDescription}
        </div>
        <div style={{ fontTransform: "uppercase" }}>
          <FontAwesomeIcon icon={faWind} />
          <br />
          {windSpeed}
        </div>
        <div>
          <FontAwesomeIcon icon={faTemperatureLow} />
          <br />
          {minTemprature}
        </div>
        <div>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <br />
          {maxTemprature}
        </div>
        {/* <div> Need to figure precipitation
          <FontAwesomeIcon icon={faWater} />
          <br />
        </div> */}
        <div>
          <FontAwesomeIcon icon={faTint} /> <br />
          {humidity}
        </div>
      </div>
      <Days data={currentWeather} style={{ marginLeft: "300px" }} />
    </div>
  );
}
