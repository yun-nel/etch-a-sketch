const sketchContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");

// Creates a 16x16 grid.
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    sketchContainer.appendChild(newDiv);
}

// Updates the size of the grid based on changes in the slider value. Calls getNumberofSquares()
function updateGrid() {
    const grid = document.querySelectorAll(".grid");

    slider.addEventListener("input", function() {
        sketchContainer.innerHTML = "";

        for (let i = 0; i < getNumberOfSquares(); i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid");
            sketchContainer.appendChild(newDiv);
            newDiv.style.cssText = `width: calc(100% / ${slider.value}); height: calc(100% / ${slider.value});`
        }
    
        sketchBlack();
    });
}

// Returns a randomised RGB value. 
function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Adds functionality for user to sketch in black.
function sketchBlack() {
    const grid = document.querySelectorAll(".grid");

    grid.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = "black";
        });
    });
}

// Adds functionality for user to sketch in random RGB values.
function sketchRandom() {
    const grid = document.querySelectorAll(".grid");

    grid.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = getRandomRGB()
        });
    });
}

// Displays the current value of the grid slider on the webpage.
function showSliderValue() {
    slider.addEventListener("input", function() {
        sliderValue.textContent = `${this.value} x ${this.value}`;
        return Math.pow(this.value, 2);
    })
};

// Returns the slider value multiplied by itself. 
function getNumberOfSquares() {
    return Math.pow(slider.value, 2);
}

showSliderValue();
updateGrid();
sketchBlack();