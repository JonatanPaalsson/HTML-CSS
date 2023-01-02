const url = "https://api.open-meteo.com/v1/forecast?latitude=59.91&longitude=10.75&hourly=temperature_2m&start_date=2023-01-03&end_date=2023-01-03"


const button = document.querySelector("button")
button.addEventListener("click", getWeather);

function getWeather() {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}