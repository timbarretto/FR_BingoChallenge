"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boards = void 0;
// Import Board class
var board_1 = require("./board");
// Import file system module
var fs = require("fs");
// Class to represent collection of boards
var Boards = /** @class */ (function () {
    function Boards() {
        // Initialize empty boards array
        this.boards = [];
    }
    // Get boards by loading from files
    Boards.prototype.getBoards = function () {
        var _this = this;
        // Get list of files in boards directory
        var files = fs.readdirSync("data/boards");
        // Loop through each file
        files.forEach(function (file) {
            // Read file contents
            var contents = fs.readFileSync("data/boards/".concat(file), "utf8");
            // Create board from contents
            var board = new board_1.Board(contents);
            // Add board to collection
            _this.boards.push(board);
        });
        // Return boards array
        return this.boards;
    };
    return Boards;
}());
exports.Boards = Boards;
