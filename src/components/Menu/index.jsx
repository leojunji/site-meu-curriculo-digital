/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { orderListByPosition } from "../../functions";

const Menu = ({ class_name }) => {
  const [activeSubTopic, setActiveSubTopic] = useState(null);
  let topics = [
    {
      id: 0,
      text: "Home",
      link: "/",
      subTexts: null,
      position: 1,
    },
    {
      id: 1,
      text: "Sobre mim",
      link: "/about",
      subTexts: [
        {
          text: "skills",
          link: "/",
          position: 1,
        },
        {
          text: "experiências",
          link: "/",
          position: 2,
        },
        {
          text: "idiomas",
          link: "/",
          position: 3,
        },
      ],
      position: 3,
    },
    {
      id: 2,
      text: "Projetos",
      link: "/projects",
      subTexts: null,
      position: 2,
    },
  ];

  topics = orderListByPosition(topics);

  const handleClick = (e) => {
    setActiveSubTopic(
      parseInt(e.currentTarget.id, 10) === activeSubTopic
        ? null
        : parseInt(e.currentTarget.id, 10)
    );
  };

  return (
    <header className={`menu ${class_name}`}>
      <nav className="hamburger-icon"></nav>
      {topics.map((item) => {
        item.subTexts = item.subTexts
          ? orderListByPosition(item.subTexts)
          : null;
        return item.subTexts ? (
          <nav key={item.id} className="topic withLinks">
            <button id={item.id} className="mainTopic" onClick={handleClick}>
              <p className="tittle">{item.text}</p>
              <div className="icon">
                {activeSubTopic === item.id ? "-" : "+"}
              </div>
            </button>
            <div
              id={
                item.id === activeSubTopic ? "subtopic-show" : "subtopic-hidden"
              }
              className={`subTopic `}
            >
              {item.subTexts.map((subItem, index) => {
                return (
                  <Link
                    className="o-link subTittle"
                    key={index}
                    to={subItem.link}
                  >
                    {subItem.text.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </nav>
        ) : (
          <nav key={item.id} className="topic noLinks">
            <Link className="o-link" to={item.link}>
              <p className="tittle">{item.text}</p>
            </Link>
          </nav>
        );
      })}
    </header>
  );
};

export default Menu;
