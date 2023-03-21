const sketchContainer = document.querySelector(".grid-container");


// Creates 256 divs in the DOM.
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid")
    sketchContainer.appendChild(newDiv);
}

const grid = document.querySelectorAll(".grid");

function sketchBlack() {
    grid.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = "black"
        });
    });
}

sketchBlack()