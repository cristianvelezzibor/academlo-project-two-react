import "./InputSearchCity.css";

const InputSearchCity = ({ city, onChange }) => {
  return (
    <input
      type="text"
      name="input"
      id="txtInputSearchCity"
      className="inputSearchCityClass inputSearchCityLightClass"
      placeholder="Search a city"
      value={city}
      onChange={onChange}
    />
  );
};

export default InputSearchCity;
