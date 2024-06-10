import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
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
    <header className="menu">
      <nav className="topics">
        {links.map((item) => {
          return (
            <Link key={item.id} to={item.link}>
              {item.text}
            </Link>
          );
        })}
        `
      </nav>
    </header>
  );
};

export default Menu;
