/* eslint-disable react/prop-types */
import "./Experience.css";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { useSpring, animated } from "react-spring";

const Experience = ({ name, delay }) => {
  const title = `${name.split(" ")[0]}`;

  const experienceDataId = "d050de821f776e269c38c2f5223b1bc8";
  const keyForSessionStorage = "experiencesData";

  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);
        if (storedData) {
          console.log("INFO:: USING SESSION");
          setExperiences(JSON.parse(storedData));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA: " + error);
        sessionStorage.clear();
      }
    };
    fetchExperienceData();
  }, [experienceDataId, keyForSessionStorage]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="experience">
        <h2 className="tittle">{title}</h2>

        {experiences.map((item, index) => (
          <ExperienceItem key={item.id} item={item} delay={index * delay} />
        ))}
      </div>
    );
  }
};

const ExperienceItem = ({ item, delay, duration }) => {
  const fadeConfig = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
    config: { duration: duration },
  });

  return (
    <animated.div style={fadeConfig}>
      <div className="topic">
        <h2>{item.name}</h2>
        <h3>{item.company}</h3>
        <h4>{`(${item.firstDay}-${item.lastDay})`}</h4>
        <p>{item.Description}</p>
      </div>
    </animated.div>
  );
};

export default Experience;
