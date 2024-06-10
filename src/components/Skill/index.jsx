/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Skill.css";
import getDataLatestGist from "../GistContent";
import Loading from "../Loading";
const Skill = ({ name }) => {
  const skillDataId = "1dd58d933e9a4977a87451d9a5684038"; //gistID
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const keyForSessionStorage = "skillsData";

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const storedData = sessionStorage.getItem(keyForSessionStorage);
        if (storedData) {
          console.log("INFO:: USING SESSION");
          setSkills(JSON.parse(storedData));
        } else {
          let data;
          setIsLoading(true);
          data = await getDataLatestGist(skillDataId);
          setSkills(data);
          setIsLoading(false);
          if (data.length > 0) {
            sessionStorage.setItem(keyForSessionStorage, JSON.stringify(data));
          }
        }
      } catch (error) {
        console.log("ERRO:: TO PULL DATA from session: " + error);
        sessionStorage.clear();
        setIsLoading(true);
      }
    };
    fetchSkillsData();
  }, [skillDataId, keyForSessionStorage]);

  if (isLoading || skills.length === 0) {
    return <Loading />;
  } else {
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
  }
};

export default Skill;
