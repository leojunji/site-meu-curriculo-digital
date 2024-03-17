let experiencesData = [
    {
      role: 'Estágio em TI ', //0
      company: 'Pumatronix', 
      startDate: new Date(2022,10),
      endDate: new Date(2023,7),
      activities: 'Tinha a responsabilidade de assegurar o funcionamento dos ' +
       'servidores da empresa. Além disso, era responsável pela documentação dos projetos de TI ' +
      'da empresa e pela manutenção e inventário dos equipamentos de TI utilizados pelos ' +
      'funcionários.',
    },
    {
      role: 'Suporte de TI', //1
      company: 'IMAP', 
      startDate: new Date(2022,3),
      endDate: new Date(2022,10),
      activities: ' Tinha a responsabilidade de garantir o funcionamento de computadores, ferramentas, equipamentos e sistemas de TI utilizados pelos funcionários.',
    }
  ];
  


//cria a section curriculum__text__experience
function createExperienceSection(experience) {


  let curriculumTextExperience = document.createElement('section'); //criando <section>
  curriculumTextExperience.className = 'curriculum__text__unit experience';

  let tittleRole = document.createElement('h2'); //criando <h2>
  tittleRole.textContent = experience.role;

  let paragraphCompany = document.createElement('p'); //criando <p> para company
  paragraphCompany.className = 'company';
  let temp  = `Empresa: ${experience.company}`
  paragraphCompany.textContent = temp;

  let paragraphDates = document.createElement('p'); //criando <p> para company
  paragraphDates.className = 'date';
  temp = `(${experience.startDate.getMonth()}/${experience.startDate.getFullYear()} - ${experience.endDate.getMonth()}/${experience.endDate.getFullYear()})`
  paragraphDates.textContent = temp;

  let paragraphActivities = document.createElement('p'); //criando <p> para activities
  paragraphActivities.className = 'details';
  paragraphActivities.textContent = experience.activities;

  curriculumTextExperience.appendChild(tittleRole);
  curriculumTextExperience.appendChild(paragraphCompany);
  curriculumTextExperience.appendChild(paragraphDates);
  curriculumTextExperience.appendChild(paragraphActivities);
  
  

  return curriculumTextExperience;

};

//coloca a section dentro do curriculum__text__experience
function displayExperience(experience, parentElement) {
  
  parentElement.appendChild(createExperienceSection(experience));
};

function showAllExperiences() {
  for (let i  = 0; i < experiencesData.length; i++) {
    displayExperience(experiencesData[i],curriculumText)
  }
}

function updateTittleExperience() {
  curriculumTittle.innerHTML = "";
  let tittle = document.createElement('h1');
  tittle.textContent = "Experiências";
  curriculumTittle.appendChild(tittle);
}

let experienceButton = document.querySelector('.experience_button');

experienceButton.onclick = function() {
  updateTittleExperience();
  curriculumText.innerHTML = "";
  showAllExperiences();
}