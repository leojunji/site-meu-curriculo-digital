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
  
  let languageButton = document.querySelector('.language_button');
  
  languageButton.onclick = function() {
    console.log(createLanguageSection(languagesData[0]));
    curriculumText.innerHTML = "";
    showAllLanguages();
  }