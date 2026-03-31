

// Add this at the bottom of your script.js
document.getElementById("cityInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getWeather(); // Calls your function when Enter is pressed
    }
});


async function getWeather(){

let city = document.getElementById("cityInput").value;

let apiKey = "3373b80514c14da0a3111670abaddcd5";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

let response = await fetch(url);

let data = await response.json();

console.log(data);

if(data.cod !== 200){
alert("City not found");
return;
}

document.getElementById("city").innerText = data.name;
document.getElementById("temperature").innerText = 
"Temperature: " + data.main.temp + " °C";

document.getElementById("description").innerText = 
"Weather: " + data.weather[0].description;

document.getElementById("humidity").innerText = 
"Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerText = 
"Wind Speed: " + data.wind.speed + " m/s";



}


