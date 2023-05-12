import { useState } from "react";
import "./ButtonWeather.css";

const ButtonWeather = ({ isCelsiusProp, onClickCelsius }) => {
  return (
    <button className="buttonClass" onClick={onClickCelsius}>
      Change {isCelsiusProp ? "F" : "C"}
    </button>
  );
};

export default ButtonWeather;
