const container = document.getElementById("container")

const optionsArray = ["Cat", "Dog", "Fox", "Zebra"]

optionsArray.forEach(value => {
    const para = document.createElement("p");
    const text = document.createTextNode(value);
    para.appendChild(text)

    container.appendChild(para)
})
