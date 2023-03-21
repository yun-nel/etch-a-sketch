const sketchContainer = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid")
    sketchContainer.appendChild(newDiv);
}
