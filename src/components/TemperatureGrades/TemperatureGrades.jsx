import "./TemperatureGrades.css";

const TemperatureGrades = ({ gradesTemperature }) => {
  return (
    <p
      id="lblTemperatureGrades"
      className="temperatureGrades temperatureGradesLightClass"
    >
      {gradesTemperature}˚
    </p>
  );
};

export default TemperatureGrades;
