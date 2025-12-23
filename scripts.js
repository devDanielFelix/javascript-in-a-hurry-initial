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
let temperature = 1; //temperature in Celsius


let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrenheitText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahrenheit(temperature).toFixed(1)}°F outside.`; //toFixed() method to round the temperature.



document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;


document.querySelector(".weather-group").addEventListener('click', function(e) {
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } 
    else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrenheitText;
    }
});

setInterval(function() {
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, '0');
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, '0');
}, 1000);

 

const galleryImages = [
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Img 1"
    },
    
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },

    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },

    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
];

/* for (let i in galleryImages) {
    console.log(galleryImages[i]);
} */

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

{/* <img src="./assets/gallery/image1.jpg" 
    alt="Thumbnail Image 1" 
    data-array-index="0" 
    data-selected="true"></img> */}

galleryImages.forEach(function(image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = false;
    thumbnails.appendChild(thumb);
});