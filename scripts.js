// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

const greetingText = "Good Night";
const weatherCondition = "Winter";
const userLocation = "Calgary";
let temperature = 2.883;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed()}°C outside.`; //toFixed() method to round the temperature.

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;