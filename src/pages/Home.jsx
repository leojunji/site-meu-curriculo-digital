import "./Home.css";
import Bio from "../components/Bio";
import Networks from "../components/Networks";
import Avatar from "../components/Avatar";
import Projects from "../components/Projects";

import ButtonAnimated from "../components/ButtonAnimated";
import { useEffect, useState, useLayoutEffect } from "react";

const Home = () => {
  const [btnAnimatedActive, setBtnAnimatedActive] = useState(false);

  const handleToggle = () => {
    setBtnAnimatedActive(!btnAnimatedActive);
  };

  //It will scroll to top of the page, when I enter in this page(about.jsx)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if Ctrl + C are pressed
      if (event.ctrlKey && event.key === "c") {
        handleToggle();
      }

      // Check if Escape key is pressed
      if (event.key === "Escape") {
        setBtnAnimatedActive(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }); // Include setBtnAnimatedActive in dependency array

  return (
    <>
      <main className="o-main home">
        <div className="c-first">
          <Avatar />
          <Bio />
        </div>
        <div className="c-second">
          <Projects />
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
