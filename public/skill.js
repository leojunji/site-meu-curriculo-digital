let skillsData = [
    {
      skillName: 'Java', //0
      details: [
        'Spring Framework',
        'Criação de API Rest'
      ]
    },
    {
      skillName: 'Python', //1
      details: [
        'Para lógica de programação'
      ]
    },
    {
      skillName: 'Desenvolvimento Web', //2
      details: [
        'JavaScript, HTML, CSS e PHP',
        'Frameworks como Bootstrap e Material Design'
      ]
    },
    {
      skillName: 'SQL Server', //3
      details: [
        'Principais comandos para criação, manipulação e relacionamento de Banco de dados'
      ]
    },
    {
      skillName: 'Pacote Office', //4
      details: [
        'Excel, Word, PowerPoint'
      ]
    },
    {
      skillName: 'Suporte de TI', //5
      details: [
        'Senac-PR em 2018: Curso de montagem e manutenção de computadores - Finalizado'
      ]
    },
    {
      skillName: 'C#', //6
      details: [
        'Básico da linguagem'
      ]
    },
    {
      skillName: 'Git', //7
      details: [
        'Principais comandos'
      ]
    },
    {
      skillName: 'c++', //8
      details: [
        'Básico da linguagem'
      ]
    }
  ];


function createSkillSection(skill) {


let curriculumText_skill = document.createElement('section'); //criando <section>
curriculumText_skill.className = 'curriculum__text__unit skill';

let tittleSkill = document.createElement('h2'); //criando <h2>
// console.log("skillName: " + skill.skillName);
tittleSkill.textContent = skill.skillName;

let ulDetails = document.createElement('ul'); //criando <ul>
ulDetails.className = 'curriculum__text__details';

for (let i = 0; i < skill.details.length; i++) {
    let li = document.createElement('li'); //criando <li>
    li.textContent = skill.details[i];
    ulDetails.appendChild(li);
    
}

curriculumText_skill.appendChild(tittleSkill);
curriculumText_skill.appendChild(ulDetails);

return curriculumText_skill;

};




function displaySkill(skill, parentElement) {

parentElement.appendChild(createSkillSection(skill));
};




function showAllSkills() {

  for (let i = 0;i < skillsData.length-1;i++) {
      displaySkill(skillsData[i],curriculumText);
  }
}

function updateTittleSkill() {
  curriculumTittle.innerHTML = "";
  let tittle = document.createElement('h1');
  tittle.textContent = "Skills";
  curriculumTittle.appendChild(tittle);
}

const skillButton = document.querySelector('.skill_button');


//initial values
updateTittleSkill();
showAllSkills();
skillButton.classList.add('active');



skillButton.onclick = function() {
  removeActive();
  skillButton.classList.add('active');
  updateTittleSkill();
  curriculumText.innerHTML = "";
  showAllSkills();
}
