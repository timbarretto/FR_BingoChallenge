// Import Board class
import { Board } from "./board";
// Import file system module
import * as fs from "fs";
// Class to represent collection of boards
export class Boards {
  // Array to store boards private boards: Board[];
  private boards: Board[];

  constructor() {
    // Initialize empty boards array
    this.boards = [];
  }
  // Get boards by loading from files
  getBoards(): Board[] {
    // Get list of files in boards directory
    const files = fs.readdirSync("data/boards");
    // Loop through each file
    files.forEach((file) => {
      // Read file contents
      const contents = fs.readFileSync(`data/boards/${file}`, "utf8");
      // Create board from contents
      const board = new Board(contents);
      // Add board to collection
      this.boards.push(board);
    });
    // Return boards array
    return this.boards;
  }
}
