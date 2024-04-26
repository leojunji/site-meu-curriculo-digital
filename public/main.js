//global variables +++

var curriculumText = document.querySelector(".curriculum__text");

var curriculumTittle = document.querySelector(".curriculum__tittle");

const topicsBT = document.querySelectorAll(".topic");

function removeActive() {
  topicsBT.forEach(function (item) {
    item.classList.remove("active");
  });
}

//global functions
