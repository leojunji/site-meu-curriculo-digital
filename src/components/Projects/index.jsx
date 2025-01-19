import "./Projects.css";

import ProjectCard from "../ProjectCard";

const Projects = () => {
  const cards = [
    {
      id: 1,
      className: "projectCard",
      projectLogo: "CastWave_logo.svg",
      mainLanguage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      text: "Site WaveCast",
      link: "https://wavecast-lyart.vercel.app/",
      crown: false,
      width: false,
      height: false,
      // firstColor: "cornflowerblue",
      // secondColor: "aqua"
    },
    {
      id: 2,
      className: "projectCard",
      projectLogo: "api.svg",
      mainLanguage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      text: "APIs REST em Java",
      link: "https://github.com/leojunji/projetos-java",
      crown: false,
      width: false,
      height: false,
      // firstColor: "cornflowerblue",
      // secondColor: "crimson"
    },
    {
      id: 3,
      className: "projectCard",
      projectLogo: "site_logo.svg",
      mainLanguage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "Este Site!",
      link: "https://github.com/leojunji/site-meu-curriculo-digital",
      crown: true,
      width: false,
      height: false,
      // firstColor: "aqua",
      // secondColor: "white"
    },
    {
      id: 4,
      className: "projectCard",
      projectLogo: "avl_tree.svg",
      mainLanguage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      text: "AVL Tree",
      link: "https://github.com/leojunji/Java_AVL_Tree",
      crown: false,
      width: "200",
      height: "100",
      // firstColor: "aqua",
      // secondColor: "white"
    },
    // {
    //   id: 4,
    //   className: "projectCard",
    //   projectLogo: "api.svg",
    //   mainLanguage:
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    //   text: "API Rest em Java",
    //   crown: false,
    //   // firstColor: "cornflowerblue",
    //   // secondColor: "crimson"
    // },
    // {
    //   id: 5,
    //   className: "projectCard",
    //   projectLogo: "api.svg",
    //   mainLanguage:
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    //   text: "API Rest em Java",
    //   crown: false,
    //   // firstColor: "cornflowerblue",
    //   // secondColor: "crimson"
    // },
  ];

  return (
    <div className="projects">
      <div className="projectsTxt">
        <h1 className="tittle">
          Projetos
          <img src="/img/work_tools.svg" alt="" className="icon" />
        </h1>
      </div>

      <div className="cardsArea">
        <div className="cards">
          {cards.map((item) => {
            return (
              <a key={item.id} href={item.link} className="project-link">
                <ProjectCard
                  className={item.className}
                  projectLogo={item.projectLogo}
                  mainLanguage={item.mainLanguage}
                  text={item.text}
                  crown={item.crown}
                  width={item.width}
                  height={item.height}
                  // firstColor={"cornflowerblue"}
                  // secondColor={"aqua"}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
