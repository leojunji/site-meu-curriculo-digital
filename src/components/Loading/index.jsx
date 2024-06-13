/* eslint-disable react/prop-types */
import "./Loading.css";

const Loading = ({ fontColor }) => {
  return (
    <div className="loading center">
      <h2 style={{ color: fontColor }}>Loading...</h2>
    </div>
  );
};

export default Loading;
