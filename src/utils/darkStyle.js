const darkStyle = (cardDarkImg) => {
  document
    .querySelector(".containerAll")
    .classList.add("containerAllBackgroudDark");
  document
    .querySelector("#txtInputSearchCity")
    .classList.add("inputSearchCityDarkClass");
  document.querySelector("#imgBackground").src = cardDarkImg;
  document
    .querySelector("#lblTemperatureGrades")
    .classList.add("temperatureGradesDarkClass");
  document
    .querySelector("#lsWeatherConditions")
    .classList.add("weatherConditionsDarkClass");
  document
    .querySelector("#dvWeatherLocationClimate")
    .classList.add("weatherLocationClimateDarkClass");
  return true;
};

export default darkStyle;
