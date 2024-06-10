/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Idioms.css";
import getDataLatestGist from "../GistContent";
import Loading from "../Loading";

// eslint-disable-next-line react/prop-types
const Idiom = ({ name }) => {
  const idiomsDataId = "0acce4c14afbab07e0420f9f04e16d29";
  const keyForSessionStorage = "idiomsData";

  const [idioms, setIdioms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //console.log("Mostrando Idioma");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);

        if (storedData) {
          console.log("INFO:: USING SESSION");
          setIdioms(JSON.parse(storedData));
        } else {
          setIsLoading(true);
          const data = await getDataLatestGist(idiomsDataId);

          setIdioms(data);
          setIsLoading(false);
          sessionStorage.setItem(keyForSessionStorage, JSON.stringify(data));
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA: " + Error);
        sessionStorage.clear();
      }
    };

    fetchData();
  }, [idiomsDataId, keyForSessionStorage]);

  if (isLoading || idioms.length === 0) {
    return <Loading />;
  }
  try {
    return (
      <div className="idioms">
        <h2 className="tittle">{name}</h2>
        {idioms.map((item) => {
          return (
            <div className="topic" key={item.id}>
              <h3>{item.language}</h3>
              <p>{item.level}</p>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.log("ERROR:: RENDERING: -CLEANING SESSIONS STORAGE");
    sessionStorage.clear();
  }
};

export default Idiom;
