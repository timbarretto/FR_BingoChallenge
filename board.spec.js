"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
describe("Board", function () {
    var board;
    var boardString = "1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25";
    var parsedBoardString = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
    beforeEach(function () {
        board = new board_1.Board(boardString);
    });
    it("checks for row winner", function () {
        board.markNumber(1);
        board.markNumber(2);
        board.markNumber(3);
        board.markNumber(4);
        board.markNumber(5);
        expect(board.isWinner()).toBe(true);
    });
    it("checks for column winner", function () {
        board.markNumber(1);
        board.markNumber(6);
        board.markNumber(11);
        board.markNumber(16);
        board.markNumber(21);
        expect(board.isWinner()).toBe(true);
    });
    it("checks for no winner", function () {
        board.markNumber(1);
        expect(board.isWinner()).toBe(false);
    });
    describe("constructor", function () {
        it("parses the board string correctly", function () {
            expect(board.getNumbers()).toEqual(parsedBoardString);
        });
    });
    describe("initializeMarked", function () {
        it("initializes array matching the board size", function () {
            var marked = board.initializeMarked();
            expect(marked).toEqual([
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
            ]);
        });
    });
    describe("markNumber", function () {
        it("marks the correct number", function () {
            board.markNumber(7);
            expect(board.getMarked()[1][1]).toBe(true);
        });
        it("does not mark incorrect number", function () {
            board.markNumber(10);
            expect(board.getMarked()[0][0]).toBe(false);
        });
    });
    describe("parseBoardString", function () {
        it("throws if no board string is passed", function () {
            expect(function () {
                board.parseBoardString("");
            }).toThrow("Board string is required");
        });
        it("parses a valid board string", function () {
            var result = board.parseBoardString(boardString);
            expect(result).toEqual(parsedBoardString);
        });
        it("throws if invalid number of rows", function () {
            expect(function () {
                board.parseBoardString("1 2 3");
            }).toThrow("Board must have 5 rows");
        });
        it("throws if number is greater than 26", function () {
            expect(function () {
                board.parseBoardString("27 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25");
            }).toThrow("Number must be below 27");
        });
    });
});
