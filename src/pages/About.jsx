import "./About.css";
import Button from "react-bootstrap/Button";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Idiom from "../components/Idiom";
import { useState } from "react";

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
      <p>teste</p>
    </main>
  );
};

export default About;
