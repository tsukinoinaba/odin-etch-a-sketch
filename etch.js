function generateGrid (size) {
    container.replaceChildren();

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < size; j++) {
            const cellContainer = document.createElement("div");
            cellContainer.classList.add("grid");

            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", colourOnHover);
            cell.style.opacity = 0;
            
            cellContainer.appendChild(cell);
            row.appendChild(cellContainer);
        }
        
        container.appendChild(row);
    }
}

function colourOnHover () {
    const randomColor = Math.floor(Math.random() * 16**6);
    this.style.backgroundColor = "#" + randomColor.toString(16);
    this.style.opacity = Math.min(1, parseFloat(this.style.opacity) + 0.1);
}

function createPopup () {
    const width = Number(prompt("Enter width of new grid"));
    if (typeof width !== "number" || width < 0 || width % 1 !== 0) {
        alert("Invalid value for grid width! Please enter a positive whole number.");
        return;
    }
    generateGrid(width);
}

const container = document.querySelector("#container");

generateGrid(16);
