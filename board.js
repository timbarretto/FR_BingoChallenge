"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
// Board class represents the game board
var Board = /** @class */ (function () {
    // Constructor to initialize board from string
    function Board(boardString) {
        this.numbers = this.parseBoardString(boardString);
        // Initialize empty marked board
        this.marked = this.initializeMarked();
    }
    Board.prototype.initializeMarked = function () {
        var _this = this;
        if (this.numbers.length === 0) {
            throw Error("Board is empty");
        }
        //initialise a 2D boolean array to track marks,
        //with the same dimensions as the numbers
        //set to false initially to track which
        //ones become true when a number is marked.
        return new Array(this.numbers.length)
            .fill(null)
            .map(function () { return new Array(_this.numbers[0].length).fill(false); });
    };
    Board.prototype.parseBoardString = function (boardString) {
        //validate the board string
        if (!boardString) {
            throw new Error("Board string is required");
        }
        //split the board string into rows,
        var rows = boardString.trim().split("\n");
        //validate the amount of rows
        if (rows.length != 5) {
            throw new Error("Board must have 5 rows");
        }
        //parse each row into numbers,
        // `.map()` to iterate over each row string.
        // For each row, it splits on space to get each number, trims whitespace.
        // It parses each number string to an integer
        // It validates each number is below 27 by throwing an error.
        // Each valid number is returned.
        return rows.map(function (row) {
            return row
                .trim()
                .split(" ")
                .map(function (num) {
                var boardNum = parseInt(num);
                if (boardNum > 26) {
                    throw new Error("Number must be below 27");
                }
                return boardNum;
            });
        });
    };
    // Mark number on board
    Board.prototype.markNumber = function (number) {
        // Loop through numbers and mark
        for (var i = 0; i < this.numbers.length; i++) {
            for (var j = 0; j < this.numbers[i].length; j++) {
                if (this.numbers[i][j] === number) {
                    this.marked[i][j] = true;
                }
            }
        }
    };
    // Check for winner
    Board.prototype.isWinner = function () {
        // Check rows  for win
        for (var _i = 0, _a = this.marked; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.every(function (isMarked) { return isMarked; })) {
                return true;
            }
        }
        var _loop_1 = function (i) {
            var column = this_1.marked.map(function (row) { return row[i]; });
            if (column.every(function (isMarked) { return isMarked; })) {
                return { value: true };
            }
        };
        var this_1 = this;
        // Check columns  for win
        for (var i = 0; i < this.marked[0].length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        // No winner
        return false;
    };
    // Get marked board numbers
    Board.prototype.getMarked = function () {
        return this.marked;
    };
    // Get numbers for testing
    Board.prototype.getNumbers = function () {
        return this.numbers;
    };
    return Board;
}());
exports.Board = Board;
