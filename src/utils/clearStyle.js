const cleanStyle = () => {
  //Theme Dark
  document
    .querySelector(".containerAll")
    .classList.remove("containerAllBackgroudDark");
  document
    .querySelector("#txtInputSearchCity")
    .classList.remove("inputSearchCityDarkClass");
  document
    .querySelector("#lblTemperatureGrades")
    .classList.remove("temperatureGradesDarkClass");
  document
    .querySelector("#lsWeatherConditions")
    .classList.remove("weatherConditionsDarkClass");
  document
    .querySelector("#dvWeatherLocationClimate")
    .classList.remove("weatherLocationClimateDarkClass");

  //Theme Light
  document
    .querySelector(".containerAll")
    .classList.remove("containerAllBackgroudLight");
  document
    .querySelector("#txtInputSearchCity")
    .classList.remove("inputSearchCityLightClass");
  document
    .querySelector("#lblTemperatureGrades")
    .classList.remove("temperatureGradesLightClass");
  document
    .querySelector("#lsWeatherConditions")
    .classList.remove("weatherConditionsLightClass");
  document
    .querySelector("#dvWeatherLocationClimate")
    .classList.remove("weatherLocationClimateLightClass");
  return true;
};

export default cleanStyle;
