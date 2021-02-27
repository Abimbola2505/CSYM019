function changeContent() {
  var element = document.getElementById("circle");
  element.firstChild.nodeValue = "hahaha";
}

function myClickCircleEvent() {
  var element = document.getElementById("circle");
  element.addEventListener("click", changeContent);
}


document.addEventListener('DOMContentLoaded', myClickCircleEvent);