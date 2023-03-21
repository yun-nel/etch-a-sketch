const sketchContainer = document.querySelector(".grid-container");


// Creates 256 divs in the DOM.
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid")
    sketchContainer.appendChild(newDiv);
}

// Returns a randomised RGB value. 
function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const grid = document.querySelectorAll(".grid");

// Adds functionality for user to sketch in black.
function sketchBlack() {
    grid.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = "black";
        });
    });
}

// Adds functionality for user to sketch in random RGB values.
function sketchRandom() {
    grid.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = getRandomRGB()
        });
    });
}

sketchRandom()
