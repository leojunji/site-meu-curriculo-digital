import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="ProjectCard">
      <div className="image">
        <img src="site_logo.svg" alt="" />
      </div>

      <div
        className="text"
        style={{ background: "linear-gradient(to left, orange, red)" }}
      >
        <div className="main-text">
          <p>Site WaveCast</p>
        </div>
      </div>
      <div className="logo">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /> */}
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> */}
      </div>
    </div>
  );
};
export default ProjectCard;
