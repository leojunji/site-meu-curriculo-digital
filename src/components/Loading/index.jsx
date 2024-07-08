/* eslint-disable react/prop-types */
import "./Loading.css";

const Loading = ({ fontColor }) => {
  return (
    <div className="loading">
      <h2 style={{ color: fontColor }}>Loading...</h2>
    </div>
  );
};

export default Loading;
