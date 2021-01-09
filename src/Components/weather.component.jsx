import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
        <div className="row">
          <div className="col-sm">
            {/* Get Celsius */}
            {props.temp_celsius ? (
              <h1 className="py-4"><p>Temp: {props.temp_celsius}&deg;</p></h1>
            ) : null}
          </div>
          <div className="col-sm">
            {/* show max and min temp */}
            {maxminTemp(props.temp_min, props.temp_max)}
          </div>
          <div className="col-sm">
            {/* description */}
            <h3 className="py-4">
              {props.description.charAt(0).toUpperCase() + props.description.slice(1)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h2 className="py-4">
        <span className="py-4"><p>Min Temp: {min}&deg;</p></span>
        <span className="py-4"><p>Max Temp: {max}&deg;</p></span>
      </h2>
    );
  }
}
