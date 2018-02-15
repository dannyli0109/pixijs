import Cell from "./cell.js"

export default class Game {
    constructor(board, player, monsters) {
        this.board = board
        this.player = player
        this.monsters = monsters
    }
}