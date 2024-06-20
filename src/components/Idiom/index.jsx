/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Idioms.css";
import Loading from "../Loading";
import { useSpring, animated } from "react-spring";

const Idiom = ({ name }) => {
  const idiomsDataId = "0acce4c14afbab07e0420f9f04e16d29";
  const keyForSessionStorage = "idiomsData";

  const [idioms, setIdioms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);

        if (storedData) {
          console.log("INFO:: USING SESSION");
          setIdioms(JSON.parse(storedData));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA: " + error);
        sessionStorage.clear();
      }
    };

    fetchData();
  }, [idiomsDataId, keyForSessionStorage]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="idioms">
        <h2 className="tittle">{name}</h2>
        {idioms.map((item, index) => (
          <IdiomItem key={item.id} item={item} delay={index * 300} />
        ))}
      </div>
    );
  }
};

const IdiomItem = ({ item, delay }) => {
  const fadeConfig = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
    config: { duration: 300 },
  });

  return (
    <animated.div style={fadeConfig}>
      <div className="topic">
        <h3>{item.language}</h3>
        <p>{item.level}</p>
      </div>
    </animated.div>
  );
};

export default Idiom;
