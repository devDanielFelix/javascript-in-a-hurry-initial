// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

const greetingText = "Good Morning";
const weatherCondition = "Sunny";
const usetLocation = "Calgary";
let temperature = 22.875;
let weatherText = "The weather is cloudy in London and it's 22°C outside.";