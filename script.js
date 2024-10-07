const cont = document.querySelector("#drawPad");
const btnReset = document.querySelector("#reset");

let divArray = [];
const startRowsColumns = 16;
let numRows = startRowsColumns;
let numCols = startRowsColumns;

drawGrid();

btnReset.addEventListener('click', () => {
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    divArray = [];

    let numSquares = prompt("How many squares to a side?");
    numCols = numSquares;
    numRows = numSquares;
    drawGrid();
})

function createRow(numCols) {
    const row = [];
    for (let col = 0; col < numCols; col++) {
        const div = document.createElement('div');
        div.setAttribute("class", "drawBlock");
        div.style.width = (500/numCols) + "px";
        row.push(div);
    }
    return row;
}

function drawGrid() {
    for (let row = 0; row < numRows; row++) {
        divArray.push(createRow(numCols));
    }
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            divArray[row][col].setAttribute("id", row + "-" + col);
            cont.appendChild(divArray[row][col]);
        }
    }

    const elements = document.querySelectorAll(".drawBlock");

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.setAttribute("class", "drawBlockFilled");
        })
    });
}

