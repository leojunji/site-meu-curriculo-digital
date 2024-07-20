import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="first hero">
      <img src="img/api.svg" alt="" className="image" />
      <div className="text">
        <div className="main-text">
          <p>API Rest em Java</p>
        </div>
        <div className="date">
          <p>30.11.2022</p>
        </div>
      </div>
      <div className="logo">
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> */}

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> */}
      </div>
    </div>
  );
};
export default ProjectCard;
