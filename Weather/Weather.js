let cityInput = document.querySelector("input");
let show = document.querySelector("button");
let div = document.querySelector("div");
let cityP = document.getElementById("city");
let tempP = document.getElementById("temp");
let descP = document.getElementById("desc");
let error = document.getElementById("error");

let api = "93c538e5525bb7bf87a5f3e91d55644a";

async function display(){
    let city = cityInput.value.toLowerCase();
    if(city) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
        let response = await fetch(url);
        if(!response.ok) {
            div.style.display="block";
            error.textContent = `Could not fetch data for ${cityInput.value}`;
            return;
        }
        div.style.display="block";
        error.textContent="";
        let data = await response.json();
        const {name: cityName,main,weather} = data;
        cityP.textContent = cityName;
        tempP.textContent = `${(main.temp-273).toFixed(1)} C`;
        descP.textContent = weather[0].description;
    }
    else {
        div.style.display = "block";
        cityP.textContent = "";
        tempP.textContent = "";
        descP.textContent = "";
        error.textContent = "Please enter city";
    }
}
