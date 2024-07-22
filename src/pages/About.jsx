import "./About.css";
import Button from "react-bootstrap/Button";
import Experience from "../components/Experience";
import Idiom from "../components/Idiom";
import { useState, useLayoutEffect } from "react";
import Skill from "../components/Skill";

const About = () => {
  let listOptions = [
    {
      id: 0,
      name: "Skills",
      showOption: true,
    },
    {
      id: 1,
      name: "Experiências profissionais",
      showOption: false,
    },
    {
      id: 2,
      name: "Idiomas",
      showOption: false,
    },
  ];
  const [options, setOptions] = useState(listOptions);

  //It will scroll to top of the page, when I enter in this page(about.jsx)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const showContent = (event) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        showOption: event.target.value == option.id ? true : false,
      }))
    );
  };

  return (
    <main className="o-main about">
      <div className="curriculum-options">
        {options.map((item) => {
          return (
            <Button
              style={{ borderRadius: "30px" }}
              key={item.id}
              onClick={showContent}
              aria-controls="example-collapse-text"
              value={item.id}
              className={`btn btn-sm btn-dark ${
                item.showOption ? "pressed" : ""
              }`}
            >
              {item.name}
            </Button>
          );
        })}
      </div>

      <div className="curriculum-default">
        {options.map((item) => {
          if (item.showOption) {
            if (item.id == 0) {
              return (
                <Skill
                  key={item.id}
                  name={item.name}
                  duration={0}
                  delay={200}
                />
              );
            }
            if (item.id == 1) {
              return (
                <Experience
                  key={item.id}
                  name={item.name}
                  duration={0}
                  delay={200}
                />
              );
            }
            if (item.id == 2) {
              return (
                <Idiom
                  key={item.id}
                  name={item.name}
                  duration={0}
                  delay={200}
                />
              );
            } else {
              return (
                <>
                  <p>Erro</p>
                </>
              );
            }
          }
        })}
      </div>
    </main>
  );
};

export default About;
