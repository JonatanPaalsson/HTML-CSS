const myNewFunction = () => {
  const enterString = prompt("What be displayed in the button?");
  if (myButton) {
    myButton.textContent = enterString + "helloo";
  }
};

const myButton = document.getElementById("myBtn");
if (myButton) {
  myButton.addEventListener("click", myNewFunction);
}
