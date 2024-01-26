// Import Board class
import { Board } from "./board";
import { Boards } from "./boards";

// Game class to manage game logic
export class Game {
  // Board instance
  private boards: Board[];

  // Player inputs
  private inputs: number[];

  // Constructor to initialize board and inputs
  constructor(inputs: number[]) {
    this.inputs = inputs;
    this.boards = new Boards().getBoards();
  }

  // Main entry point for running the game
  play(): void {
    this.runTurns();
  }
  // Loops through each input and processes a turn
  runTurns(): void {
    for (let input of this.inputs) {
      // Take a turn with the current input
      let winningBoard = this.takeTurn(input);
      // Check if a winner was found
      if (winningBoard > 0) {
        console.log(
          "Winner board: ",
          winningBoard,
          this.boards[winningBoard - 1]
        );
        return;
      }
    }
    // No winner after all turns
    console.log("No Winner found");
    return;
  }
  // Processes a single turn with an input
  takeTurn(input: number): number {
    // Track current board index
    let boardCount = 0;
    // Loop through each board
    for (let board of this.boards) {
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
  }
  // Get boards for testing
  getBoards(): Board[] {
    return this.boards;
  }
}
