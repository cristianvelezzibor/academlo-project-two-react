import { useEffect, useState } from "react";
import { getCoordinates } from "./service/getCoordinates";
import { getCurrentWheter } from "./service/getCurrentWheterEndPoint";
import { getCurrentWheterByCity } from "./service/getCurrentWheterEndPoint";
import { switchControl } from "./utils/switchControl";
import darkStyle from "./utils/darkStyle";
import lightStyle from "./utils/lightStyle";
import clearStyle from "./utils/clearStyle";
import cardLightImg from "./assets/card/cardLight.png";
import cardDarkImg from "./assets/card/cardDark.png";
import InputSearchCity from "./components/InputSearchCity/InputSearchCity";
import ImgCard from "./components/ImgCard/ImgCard";
import ButtonWeather from "./components/ButtonWeather/ButtonWeather";
import TemperatureGrades from "./components/TemperatureGrades/TemperatureGrades";
import ImgIcon from "./components/ImgIcon/ImgIcon";
import TextWeatherLocationClimate from "./components/TextWeatherLocationClimate/TextWeatherLocationClimate";
import Loading from "./components/Loading/Loading";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isCelsius, setisCelsius] = useState(true);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeInputCity = ({ target }) => {
    setCity(target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    loadWheterByCity(city);
  };
  const loadWheterByCity = async (filterCity) => {
    const weather = await getCurrentWheterByCity(filterCity);
    setTimeout(() => setLoading(false), 500);
    setWeatherInfo(weather);
  };

  const onChangeBackground = () => {
    let stateSwitch = switchControl();
    clearStyle();
    if (stateSwitch) {
      darkStyle(cardDarkImg);
    } else {
      lightStyle(cardLightImg);
    }
  };

  useEffect(() => {
    const loadWheter = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weather = await getCurrentWheter(
          coordinates.latitude,
          coordinates.longitude
        );
        setTimeout(() => setLoading(false), 2000);
        setWeatherInfo(weather);
      }
    };
    loadWheter();
  }, []);

  return (
    <>
      {!loading && weatherInfo ? (
        <>
          <form className="navbar" onSubmit={onSubmitForm}>
            <h1>Weather App</h1>
            <div className="searchCity">
              <i className="fa-solid fa-magnifying-glass"></i>
              <InputSearchCity city={city} onChange={onChangeInputCity} />
            </div>
            <div className="btn-holder" onClick={onChangeBackground}>
              <div className="btn-circle"></div>
              <input type="checkbox" className="checkbox" />
            </div>
          </form>
          <div
            id="dvContainerAll"
            className="containerAll containerAllBackgroudLight"
          >
            <ImgCard cardLightImg={cardLightImg} />
            <ButtonWeather
              isCelsiusProp={!isCelsius}
              onClickCelsius={() => setisCelsius(!isCelsius)}
            />
            <TemperatureGrades
              gradesTemperature={
                isCelsius
                  ? weatherInfo.temperature.celsius.toFixed(0)
                  : weatherInfo.temperature.farenheit.toFixed(0)
              }
            />
            <ImgIcon icon={weatherInfo.weather.icon} />
            <div
              id="lsWeatherConditions"
              className="weatherConditions weatherConditionsLightClass"
            >
              <li>WIND</li>
              <li>CLOUDS</li>
              <li>PRESSURE</li>
            </div>
            <div
              id="dvWeatherLocationClimate"
              className="weatherLocationClimate weatherLocationClimateLightClass"
            >
              <TextWeatherLocationClimate
                text={weatherInfo.city + ", " + weatherInfo.country}
              />
              <TextWeatherLocationClimate
                text={weatherInfo.weather.description.toUpperCase()}
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
