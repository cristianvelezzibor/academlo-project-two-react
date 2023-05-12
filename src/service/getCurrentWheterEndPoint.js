import axios from "axios";
import { kelvinToCelcius } from "../utils/kelvintoCelsius";
import { kelvinToFarenheit } from "../utils/kelvintoFarenheit";
import { getIconById } from "../utils/getIconById";

export const getCurrentWheter = async (lat, lon) => {
  try {
    const params = { lat, lon, appid: "73575ab9b9ade89173b4bf96af80e858" };
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      }
    );
    const weatherInfo = {
      country: result.data.sys.country,
      city: result.data.name,
      weather: {
        main: result.data.weather[0].main,
        description: result.data.weather[0].description,
        icon: getIconById(result.data.weather[0].icon),
      },
      temperature: {
        kelvin: result.data.main.temp,
        celsius: kelvinToCelcius(result.data.main.temp),
        farenheit: kelvinToFarenheit(result.data.main.temp),
      },
    };
    return weatherInfo;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentWheterByCity = async (city) => {
  try {
    const params = { q: city, appid: "73575ab9b9ade89173b4bf96af80e858" };
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      }
    );
    const weatherInfo = {
      country: result.data.sys.country,
      city: result.data.name,
      weather: {
        main: result.data.weather[0].main,
        description: result.data.weather[0].description,
        icon: getIconById(result.data.weather[0].icon),
      },
      temperature: {
        kelvin: result.data.main.temp,
        celsius: kelvinToCelcius(result.data.main.temp),
        farenheit: kelvinToFarenheit(result.data.main.temp),
      },
    };
    return weatherInfo;
  } catch (error) {
    console.error(error);
  }
};
