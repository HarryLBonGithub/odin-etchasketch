console.log("---[SCRIPTS CONNECTED]---")

let rows = 16;

let columns = 16;

let grid = document.querySelector(".grid");

let restart = document.querySelector(".restart");

function requestNewGridSize(){
    let gridSize = 0;
    do {
        gridSize = prompt("How big should the grid be? (Must be less than 100)", "16");
        gridSize= Number(gridSize);
    } 
    while (gridSize >= 100);
    
    rows = gridSize;
    columns = gridSize;
    console.log("NEW GRID SIZE =" + rows)
}

function resetCells(){
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.style.background = "grey";
        
    });
}

function replaceCells(){

    let oldRows = document.querySelectorAll(".row");
    
    oldRows.forEach(row =>{
        row.remove();
    })

    for (let i = 0; i< rows; i++){
        let newRow = document.createElement("div");
    
        newRow.classList.add("row");
    
        for (let j = 0; j < columns; j++){
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
    
            newCell.onmouseover = (event) => {
                newCell.style.background = "black";
            };
    
            newRow.appendChild(newCell);
        }
    
    
        grid.appendChild(newRow);
    }


}


for (let i = 0; i< rows; i++){
    let newRow = document.createElement("div");

    newRow.classList.add("row");

    for (let j = 0; j < columns; j++){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");

        newCell.onmouseover = (event) => {
            newCell.style.background = "black";
        };

        newRow.appendChild(newCell);
    }


    grid.appendChild(newRow);
}

restart.addEventListener("click",()=>{
    
    requestNewGridSize();
    replaceCells();

})