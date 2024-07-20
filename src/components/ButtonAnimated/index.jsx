/* eslint-disable react/prop-types */
import "./ButtonAnimated.css";

const ButtonAnimated = ({ onToggle }) => {
  return (
    <div className="buttonAnimated" onClick={onToggle}>
      <label>Contato</label>
      <button className="o-button"></button>
    </div>
  );
};
export default ButtonAnimated;
