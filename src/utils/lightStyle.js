const lightStyle = (cardLightImg) => {
  document
    .querySelector(".containerAll")
    .classList.add("containerAllBackgroudLight");
  document
    .querySelector("#txtInputSearchCity")
    .classList.add("inputSearchCityLightClass");
  document.querySelector("#imgBackground").src = cardLightImg;
  document
    .querySelector("#lblTemperatureGrades")
    .classList.add("temperatureGradesLightClass");
  document
    .querySelector("#lsWeatherConditions")
    .classList.add("weatherConditionsLightClass");
  document
    .querySelector("#dvWeatherLocationClimate")
    .classList.add("weatherLocationClimateLightClass");
  return true;
};

export default lightStyle;
