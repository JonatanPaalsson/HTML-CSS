const button = document.getElementById("myBtn");
button.addEventListener("click", useInnerHTML);


function myFunction() {
  const enterString = prompt("What should be displayed in the button?");
  button.textContent = enterString;
}

function changeToRedColor() {
  button.style.color = "red";
}

function changeColor() {
  const color = prompt("What color should the button be?");
  button.style.color = color;
}

function changeAttribute() {
  button.setAttribute("className", "newClass")
}

function useInnerHTML() {
  button.innerHTML += "<span>Hello<span>"
}