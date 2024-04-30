import axios from "axios";
import { removeActive } from "../utils/functions.js";
import { Skill } from "../types/Skill.js";

const curriculumText = document.querySelector(
  ".curriculum__text"
) as HTMLElement;

const curriculumTittle = document.querySelector(
  ".curriculum__tittle"
) as HTMLElement;

let skillsData: Skill[] = []; //void list

async function buscar() {
  try {
    const response = await axios.get(
      "https://gist.githubusercontent.com/leojunji/d00b82987955da9032951a0fcf4cd666/raw/75547904295f74da4f4cd8a02f97191f7c62688e/skill.txt"
    );

    skillsData = response.data.map(
      (skill: { skillName: string; details: string[] }) => ({
        skillName: skill.skillName,
        details: skill.details,
      })
    );

    skillButton.classList.add("active");
    updateTittleSkill();
    curriculumText.innerHTML = "";
    showAllSkills();
  } catch (error) {
    curriculumText.innerHTML = `<p> Houve um erro ao carregar as skills: ${error}</p>`;
  }
}

buscar();

function createSkillSection(skill: Skill) {
  let curriculumText_skill = document.createElement("section"); //criando <section>
  curriculumText_skill.className = "curriculum__text__unit skill";

  let tittleSkill = document.createElement("h2"); //criando <h2>
  // console.log("skillName: " + skill.skillName);
  tittleSkill.textContent = skill.skillName;

  let ulDetails = document.createElement("ul"); //criando <ul>
  ulDetails.className = "curriculum__text__details";

  for (let i = 0; i < skill.details.length; i++) {
    let li = document.createElement("li"); //criando <li>
    li.textContent = skill.details[i];
    ulDetails.appendChild(li);
  }

  curriculumText_skill.appendChild(tittleSkill);
  curriculumText_skill.appendChild(ulDetails);

  return curriculumText_skill;
}

function displaySkill(skill: Skill, parentElement: HTMLElement) {
  parentElement.appendChild(createSkillSection(skill));
}

function showAllSkills() {
  skillsData.forEach((skill: Skill) => {
    displaySkill(skill, curriculumText);
  });
}

function updateTittleSkill() {
  curriculumTittle.innerHTML = "";
  let tittle = document.createElement("h1");
  tittle.textContent = "Skills";
  curriculumTittle.appendChild(tittle);
}

const skillButton = document.querySelector(
  ".skill_button"
) as HTMLButtonElement;

buscar();

skillButton.onclick = function () {
  removeActive();
  skillButton.classList.add("active");
  updateTittleSkill();
  curriculumText.innerHTML = "";
  showAllSkills();
};
