/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Skill.css";
const Skill = ({ name }) => {
  const skillDataId = "1dd58d933e9a4977a87451d9a5684038"; //gistID
  const [skills, setSkills] = useState([]);

  const keyForSessionStorage = "skillsData";

  useEffect(() => {
    const fetchSkillsData = () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);
        if (storedData) {
          console.log("INFO:: USING SESSION");
          setSkills(JSON.parse(storedData));
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA from session: " + error);
        sessionStorage.clear();
      }
    };
    fetchSkillsData();
  }, [skillDataId, keyForSessionStorage]);

  return (
    <div className="skill">
      <h2 className="tittle">{name}</h2>
      <div className="lists">
        {skills.map((item) => {
          return (
            <div key={item.id} className="topic">
              <h3>{item.skillName}</h3>
              <ul>
                {item.details.map((detail, index) => {
                  return <li key={index}>{detail}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
