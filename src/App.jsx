import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import "./Reset.css";
import "./App.css";
import "./globalClass.css";
import { useState, useMemo } from "react";
import StoreInSessionData from "./components/StoreInSessionData";

const App = () => {
  const [dataPageAbout] = useState([
    {
      id: "1dd58d933e9a4977a87451d9a5684038",
      name: "skillsData",
    },
    {
      id: "d050de821f776e269c38c2f5223b1bc8",
      name: "experiencesData",
    },
    {
      id: "0acce4c14afbab07e0420f9f04e16d29",
      name: "idiomsData",
    },
  ]);

  useMemo(() => {
    dataPageAbout.map((item) => {
      StoreInSessionData(item);
    });
  }, [dataPageAbout]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="routes">
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
