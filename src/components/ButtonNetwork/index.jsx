/* eslint-disable react/prop-types */
import "./ButtonNetwork.css";

const ButtonNetwork = ({ name, logo, link, backgroundColor, fontColor }) => {
  //if backgroundColor is not null, then it will verify if backgroundColor has --> #, otherwise it will receive null
  const buttonNetworkBackgroundColor =
    backgroundColor != null
      ? backgroundColor.includes("#")
        ? backgroundColor
        : `#${backgroundColor}`
      : null;

  //if backgroundColor is null, it will receive an void style, and in that case, it will use css style that was set
  const bnBackgroundColor = buttonNetworkBackgroundColor
    ? { backgroundColor: buttonNetworkBackgroundColor }
    : {};

  const nameFontColor =
    fontColor != null
      ? fontColor.includes("#")
        ? fontColor
        : `#${fontColor}`
      : null;
  const nameColor = fontColor ? { color: nameFontColor } : {};

  return (
    <a className="button-network" style={bnBackgroundColor} href={link}>
      <div className=" bnc-left">
        <img
          className="bn-logo"
          src={logo ? `/img/${logo}` : "/favicon-32x32.png"}
          alt={`Logo ${name}`}
        />
      </div>

      <div className=" bnc-right">
        <p className="bn-name" style={nameColor}>
          {name}
        </p>
      </div>
    </a>
  );
};

export default ButtonNetwork;
