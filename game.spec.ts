import { Game } from "./game";

describe("Game", () => {
  let game: Game;

  const testWinningRowInputs = [22, 13, 17, 11, 0];
  const testLosingInputs = [20, 21, 22, 23, 24];

  const testWinningColumnInputs = [22, 8, 21, 6, 1];

  beforeEach(() => {
    game = new Game(testWinningRowInputs);
  });
  //checks the first item to make sure that it is marked
  it("marks numbers on the board", () => {
    game.play();
    expect(game.getBoards()[0].getMarked()[0][0]).toBe(true);
  });

  //uses the winning inputs to check that there is a winner
  it("detects a winning row", () => {
    game.play();
    expect(game.getBoards()[0].isWinner()).toBe(true);
  });

  //uses the winning inputs to check that there is a winner
  it("detects a winning column", () => {
    game = new Game(testWinningColumnInputs);
    game.play();
    expect(game.getBoards()[0].isWinner()).toBe(true);
  });

  //uses the losing inputs to confrim there is no winner
  it("detects no winner", () => {
    game = new Game(testLosingInputs);
    game.play();
    expect(game.getBoards()[0].isWinner()).toBe(false);
  });
});
