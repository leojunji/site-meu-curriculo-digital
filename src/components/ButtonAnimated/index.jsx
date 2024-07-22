/* eslint-disable react/prop-types */
import "./ButtonAnimated.css";

const ButtonAnimated = ({ onToggle, text }) => {
  return (
    <div className="buttonAnimated" onClick={onToggle}>
      <label>{text}</label>
      <button className="o-button"></button>
    </div>
  );
};
export default ButtonAnimated;
