import { Board } from "./board";

describe("Board", () => {
  let board: Board;

  const boardString =
    "1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25";

  const parsedBoardString = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  beforeEach(() => {
    board = new Board(boardString);
  });

  it("checks for row winner", () => {
    board.markNumber(1);
    board.markNumber(2);
    board.markNumber(3);
    board.markNumber(4);
    board.markNumber(5);
    expect(board.isWinner()).toBe(true);
  });

  it("checks for column winner", () => {
    board.markNumber(1);
    board.markNumber(6);
    board.markNumber(11);
    board.markNumber(16);
    board.markNumber(21);
    expect(board.isWinner()).toBe(true);
  });

  it("checks for no winner", () => {
    board.markNumber(1);
    expect(board.isWinner()).toBe(false);
  });

  describe("constructor", () => {
    it("parses the board string correctly", () => {
      expect(board.getNumbers()).toEqual(parsedBoardString);
    });
  });

  describe("initializeMarked", () => {
    it("initializes array matching the board size", () => {
      const marked = board.initializeMarked();

      expect(marked).toEqual([
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ]);
    });
  });

  describe("markNumber", () => {
    it("marks the correct number", () => {
      board.markNumber(7);
      expect(board.getMarked()[1][1]).toBe(true);
    });
    it("does not mark incorrect number", () => {
      board.markNumber(10);
      expect(board.getMarked()[0][0]).toBe(false);
    });
  });

  describe("parseBoardString", () => {
    it("throws if no board string is passed", () => {
      expect(() => {
        board.parseBoardString("");
      }).toThrow("Board string is required");
    });

    it("parses a valid board string", () => {
      const result = board.parseBoardString(boardString);
      expect(result).toEqual(parsedBoardString);
    });

    it("throws if invalid number of rows", () => {
      expect(() => {
        board.parseBoardString("1 2 3");
      }).toThrow("Board must have 5 rows");
    });

    it("throws if number is greater than 26", () => {
      expect(() => {
        board.parseBoardString(
          "27 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25"
        );
      }).toThrow("Number must be below 27");
    });
  });
});
