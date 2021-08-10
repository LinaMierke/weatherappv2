import React from "react";
import "./days.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faCloudSunRain, faCloudShowersHeavy, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Days(props) {
  // console.log("days", props.data.main.temp);
  return (
    <div className="card2">
      <div style={{ fontSize: "24px" }}> Next 7 days</div>
      <br />
      <div style={{ paddingBottom: "23px", paddingTop: "1em" ,display:"flex", justifyContent:"center"}}>
        <FontAwesomeIcon icon={faCloudShowersHeavy} /> 70.22˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px", display:"flex", justifyContent:"center"}}>
        <FontAwesomeIcon icon={faCloudSun} />
        {/* {props.data.main.temp} */} 72.22˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px",display:"flex", justifyContent:"center" }}>
        <FontAwesomeIcon icon={faCloudSun} /> 74.52˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px",display:"flex", justifyContent:"center" }}>
        <FontAwesomeIcon icon={faSun} />
        76.20˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px",display:"flex", justifyContent:"center" }}>
        <FontAwesomeIcon icon={faCloudSunRain} />
        75.06˚
        <br />
      </div>
      <div style={{ paddingBottom: "23px" ,display:"flex", justifyContent:"center"}}>
        <FontAwesomeIcon icon={faCloudSun} /> 78.33˚
        <br />
      </div>
      <div style={{ display:"flex", justifyContent:"center"}}>
        <FontAwesomeIcon icon={faCloudShowersHeavy} />
        80.02˚
        <br />
      </div>
    </div>
  );
}
