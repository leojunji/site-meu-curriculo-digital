export function removeActive() {
  const topicsBT = document.querySelectorAll(".topic");

  topicsBT.forEach(function (item) {
    item.classList.remove("active");
  });
}
