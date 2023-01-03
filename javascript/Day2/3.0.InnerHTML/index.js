const button = document.getElementById("myBtn");
button.addEventListener("click", myFunction);

const list = document.getElementById("list");

function myFunction() {
  list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
}
