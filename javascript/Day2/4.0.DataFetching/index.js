const button = document.querySelector("button")
const img = document.querySelector("img")

button.addEventListener("click", getCatPicture);

function getCatPicture() {
    fetch("https://aws.random.cat/meow")
    .then(res => res.json())
    .then(data => img.src = data.file)
}

async function getCatPic() {
    const cat = await fetch("https://aws.random.cat/meow")
    const response = await cat.json()
    img.src = response.file
}