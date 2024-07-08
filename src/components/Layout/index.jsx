import { Outlet, useLocation } from "react-router-dom";
import Menu from "../Menu";
import Footer from "../Footer";
import ButtonClose from "../HamburgerMenu";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isToggled, setIsToggled] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    handleToggle();

    const handleEscKeyPress = (event) => {
      if (event.key === "Escape") {
        handleToggle();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [location]);

  console.log("togleeeeeeeeed: " + isToggled);

  return (
    <>
      {" "}
      <ButtonClose onToggle={handleToggle} checked={isToggled} />
      {/*the elements inside this fragment will be independent, so, inside the app/html they will be like <header><main><footer> */}
      <Menu class_name={`${isToggled ? "translate" : ""}`} />
      {/*<header>*/}
      <Outlet /> {/*<main> --> inside outlet has the mains*/}
      <Footer /> {/*<footer>*/}
    </>
  );
};

export default Layout;
