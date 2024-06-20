/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Skill.css";
import Loading from "../Loading";
import { useSpring, animated } from "react-spring";

const Skill = ({ name }) => {
  const skillDataId = "1dd58d933e9a4977a87451d9a5684038"; //gistID
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const keyForSessionStorage = "skillsData";

  useEffect(() => {
    const fetchSkillsData = () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);
        if (storedData) {
          console.log("INFO:: USING SESSION");
          setSkills(JSON.parse(storedData));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA from session: " + error);
        sessionStorage.clear();
      }
    };
    fetchSkillsData();
  }, [skillDataId, keyForSessionStorage]);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="skill">
        <h2 className="tittle">{name}</h2>
        <div className="lists">
          {skills.map((item, index) => (
            <SkillItem key={item.id} item={item} delay={index * 300} />
          ))}
        </div>
      </div>
    );
  }
};

const SkillItem = ({ item, delay }) => {
  const fadeConfig = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
    config: { duration: 300 },
  });

  return (
    <animated.div style={fadeConfig}>
      <div className="topic">
        <h3>{item.skillName}</h3>
        <ul>
          {item.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </animated.div>
  );
};

export default Skill;
