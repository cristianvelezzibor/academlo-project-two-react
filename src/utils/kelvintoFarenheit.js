import { kelvinToCelcius } from "../utils/kelvintoCelsius";

export const kelvinToFarenheit = (temperatureKelvin) => {
  const celsius = kelvinToCelcius(temperatureKelvin);
  const FARENHEIT_CONVERSION = 9 / 5;
  const FARENHEIT_CONSTANT = 32;
  return celsius * FARENHEIT_CONVERSION + FARENHEIT_CONSTANT;
};
