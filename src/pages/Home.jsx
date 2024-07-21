import "./Home.css";

import Bio from "../components/Bio";
import Networks from "../components/Networks";
import Avatar from "../components/Avatar";
import ProjectCard from "../components/ProjectCard";
import ButtonAnimated from "../components/ButtonAnimated";
import { useState } from "react";

const Home = () => {
  const [btnAnimatedActive, setBtnAnimatedActive] = useState(false);

  const handleToggle = () => {
    setBtnAnimatedActive(!btnAnimatedActive);
  };

  return (
    <>
      <main className="o-main home">
        <div className="c-first">
          <Avatar />
          <Bio />
        </div>
        <div className="c-second">
          <div className="projectsTxt">
            <h1 className="tittle">
              Projetos
              <img src="/img/work_tools.svg" alt="" className="tittleIcon" />
            </h1>
          </div>

          <div className="projects" id="projects">
            <ProjectCard
              projectLogo={"CastWave_logo.svg"}
              mainLanguage={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              }
              text={"Site WaveCast"}
              // firstColor={"cornflowerblue"}
              // secondColor={"aqua"}
            />
            <ProjectCard
              projectLogo={"api.svg"}
              mainLanguage={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              }
              text={"API Rest em Java"}
              // firstColor={"cornflowerblue"}
              // secondColor={"crimson"}
            />
            <ProjectCard
              projectLogo={null}
              mainLanguage={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              }
              text={"Este Site!"}
              // firstColor={"aqua"}
              // secondColor={"white"}
            />
          </div>
        </div>
        <div className="c-third">
          <ButtonAnimated text={"Contatar"} onToggle={handleToggle} />
        </div>
      </main>
      <div
        onClick={handleToggle}
        className={`c-fourth ${btnAnimatedActive ? "active" : ""}`}
      >
        <Networks />
      </div>
    </>
  );
};

export default Home;
