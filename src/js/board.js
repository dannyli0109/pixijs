import Cell from "./cell.js"


export default class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.cells = []
    }

    initBoard() {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let cell = new Cell(i, j)
                cells.push(cell)
            }
        }
    }
}