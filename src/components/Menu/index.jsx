/* eslint-disable react/prop-types */
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = ({ class_name }) => {
  const links = [
    {
      id: 0,
      text: "Home",
      link: "/",
    },
    {
      id: 1,
      text: "Sobre mim",
      link: "/about",
    },
  ];

  return (
    <header className={`menu ${class_name}`}>
      <nav className="topic"></nav>
      {links.map((item) => {
        return (
          <nav key={item.id} className="topic">
            <Link className="content" to={item.link}>
              {item.text}
            </Link>
          </nav>
        );
      })}
    </header>
  );
};

export default Menu;
