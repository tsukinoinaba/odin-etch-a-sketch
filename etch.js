function generateGrid (size) {
    container.replaceChildren();

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", colourOnHover);
            row.appendChild(cell);
        }
        
        container.appendChild(row);
    }
}

function colourOnHover () {
    this.style.backgroundColor = "purple";
}

const container = document.querySelector("#container");

generateGrid(16);
