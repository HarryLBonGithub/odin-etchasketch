console.log("---[SCRIPTS CONNECTED]---")

let rows = 16;

let columns = 16;

let grid = document.querySelector(".grid");
console.log(grid)

for (let i = 0; i< rows; i++){
    let newRow = document.createElement("div");

    newRow.classList.add("row");

    for (let j = 0; j < columns; j++){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newRow.appendChild(newCell);
    }


    grid.appendChild(newRow);
}