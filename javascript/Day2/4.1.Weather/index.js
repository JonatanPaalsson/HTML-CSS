const url = "https://api.open-meteo.com/v1/forecast?latitude=59.91&longitude=10.75&hourly=temperature_2m&start_date=2023-01-03&end_date=2023-01-03"

const button = document.querySelector("button")


async function getWeather(url) {
    const weather = await fetch(url);
    const response = await weather.json();
    
    return response
}

const transformedWeather = (data) => {
 
    const formatedArray = data.hourly.temperature_2m.map((value, index) => {
        const ourNewObject = {temp: value, time: data.hourly.time[index]}
        return ourNewObject
    })
    
    return formatedArray
}

const getAndTransformWeather = async () => {
    const weather = await getWeather(url)
    const formatedWeather = transformedWeather(weather);
    
    
    console.log("🚀 ~ file: index.js:26 ~ getAndTransformWeather ~ formatedWeather", formatedWeather)

    return formatedWeather
}

button.addEventListener("click", getAndTransformWeather);



    /* let windArray;

    fetch(url)
    .then(res => res.json())
    .then(data => windArray = data.daily.wind) */


    /* const timeAndTempArray = response.hourly.time.map((element, index) => {
        const newObject = {time: element, temp: response.hourly.temperature_2m[index]}
        return newObject
    }); */
