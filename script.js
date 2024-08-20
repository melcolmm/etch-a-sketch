const cont = document.querySelector("#container");

const divArray = [];

function createRow(numCols) {
    const row = [];
    for (let col = 0; col < numCols; col++) {
        const div = document.createElement('div');
        row.push(div);
    }
    return row;
}

 const numRows = 16;
 const numCols = 16;

 for (let row = 0; row < numRows; row++) {
    divArray.push(createRow(numCols));
 }

 for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        cont.appendChild(divArray[row][col]);
    }
 }