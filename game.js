"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var boards_1 = require("./boards");
// Game class to manage game logic
var Game = /** @class */ (function () {
    // Constructor to initialize board and inputs
    function Game(inputs) {
        this.inputs = inputs;
        this.boards = new boards_1.Boards().getBoards();
    }
    // Main entry point for running the game
    Game.prototype.play = function () {
        this.runTurns();
    };
    // Loops through each input and processes a turn
    Game.prototype.runTurns = function () {
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            // Take a turn with the current input
            var winningBoard = this.takeTurn(input);
            // Check if a winner was found
            if (winningBoard > 0) {
                console.log("Winner board: ", winningBoard, this.boards[winningBoard - 1]);
                return;
            }
        }
        // No winner after all turns
        console.log("No Winner found");
        return;
    };
    // Processes a single turn with an input
    Game.prototype.takeTurn = function (input) {
        // Track current board index
        var boardCount = 0;
        // Loop through each board
        for (var _i = 0, _a = this.boards; _i < _a.length; _i++) {
            var board = _a[_i];
            // Increment count and mark board
            boardCount++;
            board.markNumber(input);
            // Check for winner
            if (board.isWinner()) {
                return boardCount;
            }
        }
        // No winner, return default
        return 0;
    };
    // Get boards for testing
    Game.prototype.getBoards = function () {
        return this.boards;
    };
    return Game;
}());
exports.Game = Game;
