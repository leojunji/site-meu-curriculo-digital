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
          <h1 className="tittle">Projetos</h1>
          <div className="projects" id="projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
        <div className="c-third">
          <ButtonAnimated onToggle={handleToggle} />
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
