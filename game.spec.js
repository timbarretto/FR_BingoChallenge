"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
describe("Game", function () {
    var game;
    var testWinningRowInputs = [22, 13, 17, 11, 0];
    var testLosingInputs = [20, 21, 22, 23, 24];
    var testWinningColumnInputs = [22, 8, 21, 6, 1];
    beforeEach(function () {
        game = new game_1.Game(testWinningRowInputs);
    });
    //checks the first item to make sure that it is marked
    it("marks numbers on the board", function () {
        game.play();
        expect(game.getBoards()[0].getMarked()[0][0]).toBe(true);
    });
    //uses the winning inputs to check that there is a winner
    it("detects a winning row", function () {
        game.play();
        expect(game.getBoards()[0].isWinner()).toBe(true);
    });
    //uses the winning inputs to check that there is a winner
    it("detects a winning column", function () {
        game = new game_1.Game(testWinningColumnInputs);
        game.play();
        expect(game.getBoards()[0].isWinner()).toBe(true);
    });
    //uses the losing inputs to confrim there is no winner
    it("detects no winner", function () {
        game = new game_1.Game(testLosingInputs);
        game.play();
        expect(game.getBoards()[0].isWinner()).toBe(false);
    });
});
