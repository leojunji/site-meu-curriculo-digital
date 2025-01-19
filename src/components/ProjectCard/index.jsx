/* eslint-disable react/prop-types */
import "./ProjectCard.css";

const ProjectCard = ({
  projectLogo,
  mainLanguage,
  text,
  firstColor,
  secondColor,
  crown,
  width,
  height,
}) => {
  return (
    <div className="cardArea">
      <img
        style={{ display: `${crown ? "block" : "none"}` }}
        src="/img/crown.svg"
        alt="basquiat crown"
        className="crown"
      />
      <div className="ProjectCard">
        <div className="image">
          <img
            src={projectLogo ? `/img/${projectLogo}` : "site_logo.svg"}
            alt="projectlogo"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        </div>

        <div
          className="text"
          style={{
            background: `linear-gradient(to left, ${
              firstColor ? firstColor : "orange"
            }, ${secondColor ? secondColor : "crimson"})`,
          }}
        >
          <div className="main-text">
            <p>{text ? text : "Sem texto..."}</p>
          </div>
        </div>
        <div className="logo">
          <img
            src={mainLanguage ? mainLanguage : "/img/programacao.svg"}
            alt="main language"
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
