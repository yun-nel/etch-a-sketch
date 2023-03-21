const sketchContainer = document.querySelector(".sketch-container")

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "<div>" + (i + 1);
    sketchContainer.appendChild(newDiv);
}
