import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      {" "}
      {/*the elements inside this fragment will be independent, so, inside the app/html they will be like <header><main><footer> */}
      <Menu /> {/*<header>*/}
      <Outlet /> {/*<main> --> inside outlet has the mains*/}
      <Footer /> {/*<footer>*/}
    </>
  );
};

export default Layout;
