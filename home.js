const city = document.getElementById("city");
const weatherBtn = document.getElementById("weather-btn");

function btnClicked(){
    console.log('button was clicked');
}

weatherBtn.addEventListener("click", btnClicked);
