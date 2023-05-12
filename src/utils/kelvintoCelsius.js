const FACTOR_CONVERSION = 273.1;
export const kelvinToCelcius = (temperatureKelvin) =>
  temperatureKelvin - FACTOR_CONVERSION;
