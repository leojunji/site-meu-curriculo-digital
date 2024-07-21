/* eslint-disable react/prop-types */
import "./ProjectCard.css";

const ProjectCard = ({
  projectLogo,
  mainLanguage,
  text,
  firstColor,
  secondColor,
}) => {
  return (
    <div className="ProjectCard">
      <div className="image">
        <img
          src={projectLogo ? `/img/${projectLogo}` : "site_logo.svg"}
          alt="projectlogo"
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
  );
};
export default ProjectCard;
