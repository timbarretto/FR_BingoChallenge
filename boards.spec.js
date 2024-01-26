"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import testing libraries
var boards_1 = require("./boards");
var board_1 = require("./board");
// Boards test suite
describe("Boards", function () {
    // Boards instance for tests
    var boards;
    // Initialize fresh boards before each test
    beforeEach(function () {
        boards = new boards_1.Boards();
    });
    // Test getBoards loads boards from files
    it("gets boards from files", function () {
        // Sample board values
        var board1 = new board_1.Board("22 13 17 11 0\n    8 2 23 4 24\n    21 9 14 16 7\n    6 10 3 18 5\n    1 12 20 15 19");
        var board2 = new board_1.Board("3 15 0 2 22\n    9 18 13 17 5\n    19 8 7 25 23\n    20 11 10 24 4\n    14 21 16 12 6");
        // Call method under test
        var loadedBoards = boards.getBoards();
        // Assertions
        expect(loadedBoards.length).toBeGreaterThan(2);
        expect(loadedBoards).toContainEqual(board1);
        expect(loadedBoards).toContainEqual(board2);
    });
});
