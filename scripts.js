const galleryImages = [
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

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]


function menuHandler() {
        document.querySelector("#open-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

function celsiusToFahrenheit(temperature) {
    let fahr = (temperature * 9/5) + 32; //calcular a conversão de celsiu para fahrenheit - fórmula: (C × 9/5) + 32 = F
    return fahr;
}

function greetingHandler() {

    let currentHour = new Date().getHours();
    let greetingText;

        if (currentHour < 12) {
            greetingText = "Good Morning";
        }
        else if (currentHour < 19) {
            greetingText = "Good Afternoon";
        }
        else if (currentHour < 24) {
            greetingText = "Good Evening";
        }
        else {
            greetingText = "Welcome";
        }


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
}

function clockHandler() {
        setInterval(function() {
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, '0');
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, '0');
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, '0');
    }, 1000);

}

function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;



    galleryImages.forEach(function(image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index ===0 ? true : false;

        thumb.addEventListener("click", function(e) {
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;

            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = "false";
            });

            e.target.dataset.selected = "true";

        });

        thumbnails.appendChild(thumb);
    });
}

function productsHandler() {

    let productSection = document.querySelector(".products-area");

    let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    });

    let paidProducts = products.filter(function(item){
        return item.price > 0; 
    });

    //Run a loop through the products and create an HTML element ("product-item") for each of them.
    products.forEach(function(product, index) {
        //Create the HTML element for the indivual product
        let productElement = document.createElement("div");
        productElement.classList.add("product-item");

        //Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        //Create the product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        //Create product title, author, price-title and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price:";
        
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        //Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        //Add all child HTML elements for the product
        productElement.append(productImage);
        productElement.append(productDetails);

        //Add complete individual product to the products sections
        productSection.append(productElement);
    });

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;
}

//Page Load Events

menuHandler();
greetingHandler(); 
clockHandler();
galleryHandler();
productsHandler();