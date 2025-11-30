// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

function celsiusToFahrenheit(temperature) {
    let fahr = (temperature * 9/5) + 32; //calcular a conversão de celsiu para fahrenheit - fórmula: (C × 9/5) + 32 = F
    return fahr;
}


const greetingText = "Good Night";
const weatherCondition = "Winter";
const userLocation = "Kelowna";
let temperature = 1;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahrenheit(temperature).toFixed(1)}°F outside.`; //toFixed() method to round the temperature.

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;