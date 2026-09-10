const city = document.getElementById("city");
const weatherBtn = document.getElementById("weather-btn");

const cityName = document.getElementById("cityName");
const emoji = document.getElementById("emoji");
const temp = document.getElementById("temp");
const extratemp = document.getElementById("extraTemp");
const recommendation = document.getElementById("recommendation");

async function btnClicked(){
    let cityInputted = city.value;
    let cityCapitalised = cityInputted.charAt(0).toUpperCase() + cityInputted.slice(1);
    
    const data = await getWeather(cityCapitalised);
    displayInfo(data, cityCapitalised);
}

weatherBtn.addEventListener("click", btnClicked);


async function getWeather(cityCapitalised) {
    try{
        const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + cityCapitalised + "&units=metric&appid=d5c4b39691595893eaf261c857070d43");
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Something went wrong:", error)
    }
}


function displayInfo(data, cityCapitalised){
    cityName.textContent = cityCapitalised;
    //emoji.textContent =;
    temp.textContent = `${data.main.temp}°C`;
    extratemp.textContent = `H:${data.main.temp_max} L:${data.main.temp_min}`;
    //recommendation.textContent = ;
}
