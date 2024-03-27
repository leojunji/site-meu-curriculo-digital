let languagesData = [
    {
      language: 'Inglês', //0
      level: 'Avançado',
    }
];


function createLanguageSection(language) {


    let curriculumTextLanguage = document.createElement('section'); //criando <section>
    curriculumTextLanguage .className = 'curriculum__text__unit language';
  
    let tittle = document.createElement('h2');
    tittle.textContent = language.language;
  
    let languageLevel = document.createElement('h3'); 
    languageLevel.className = 'level';
    languageLevel.textContent = language.level;
  
    curriculumTextLanguage.appendChild(tittle);
    curriculumTextLanguage.appendChild(languageLevel);
    
  
    return curriculumTextLanguage ;
  
  };


 


  function displayLanguage(language, parentElement) {
  
    parentElement.appendChild(createLanguageSection(language));
  };
  
  function showAllLanguages() {
    for (let i  = 0; i < languagesData.length; i++) {
      displayLanguage(languagesData[i],curriculumText)
    }
  }


  function updateTittleLanguage() {
    curriculumTittle.innerHTML = "";
    let tittle = document.createElement('h1');
    tittle.textContent = "Idiomas";
    console.log(tittle.classList);
    curriculumTittle.appendChild(tittle);
  }
  
  let languageButton = document.querySelector('.language_button');
  
  languageButton.onclick = function() {
    removeActive();
    languageButton.classList.add('active');
    updateTittleLanguage();
    curriculumText.innerHTML = "";
    showAllLanguages();
  }