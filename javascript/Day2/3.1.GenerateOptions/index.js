const select = document.querySelector("select")

const optionsArray = ["Cat", "Dog", "Fox", "Zebra"]

optionsArray.forEach(value => {
    select.options.add( new Option(value) )
})