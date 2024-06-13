/* eslint-disable react/prop-types */
import "./Experience.css";
import { useState, useEffect } from "react";

const Experience = ({ name }) => {
  const tittle = `${name.split(" ")[0]}`;

  const experienceDataId = "d050de821f776e269c38c2f5223b1bc8";
  const keyForSessionStorage = "experiencesData";

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);
        if (storedData) {
          console.log("INFO:: USING SESSION");
          setExperiences(JSON.parse(storedData));
        }
      } catch (error) {
        console.log("ERROR:: TO PULL DATA: " + error);
        sessionStorage.clear();
      }
    };
    fetchSkillsData();
  }, [experienceDataId, keyForSessionStorage]);

  return (
    <div className="experience">
      <h2 className="tittle">{tittle}</h2>

      {experiences.map((item) => {
        return (
          <div className="topic" key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.company}</h3>
            <h4>{`(${item.firstDay}-${item.lastDay})`}</h4>
            <p>{item.Description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
