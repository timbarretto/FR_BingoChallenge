// Board class represents the game board
export class Board {
  // Numbers on the board
  private numbers: number[][];
  // Marked numbers
  private marked: boolean[][];
  // Constructor to initialize board from string
  constructor(boardString: string) {
    this.numbers = this.parseBoardString(boardString);

    // Initialize empty marked board
    this.marked = this.initializeMarked();
  }

  initializeMarked(): boolean[][] {
    if (this.numbers.length === 0) {
      throw Error("Board is empty");
    }
    //initialise a 2D boolean array to track marks,
    //with the same dimensions as the numbers
    //set to false initially to track which
    //ones become true when a number is marked.
    return new Array(this.numbers.length)
      .fill(null)
      .map(() => new Array(this.numbers[0].length).fill(false));
  }

  parseBoardString(boardString: string): number[][] {
    //validate the board string
    if (!boardString) {
      throw new Error("Board string is required");
    }
    //split the board string into rows,
    const rows = boardString.trim().split("\n");

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
    return rows.map((row) => {
      return row
        .trim()
        .split(" ")
        .map((num) => {
          const boardNum: number = parseInt(num);
          if (boardNum > 26) {
            throw new Error("Number must be below 27");
          }
          return boardNum;
        });
    });
  }
  // Mark number on board
  markNumber(number: number): void {
    // Loop through numbers and mark
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.numbers[i].length; j++) {
        if (this.numbers[i][j] === number) {
          this.marked[i][j] = true;
        }
      }
    }
  }
  // Check for winner
  isWinner(): boolean {
    // Check rows  for win
    for (const row of this.marked) {
      if (row.every((isMarked) => isMarked)) {
        return true;
      }
    }
    // Check columns  for win
    for (let i = 0; i < this.marked[0].length; i++) {
      const column = this.marked.map((row) => row[i]);
      if (column.every((isMarked) => isMarked)) {
        return true;
      }
    }
    // No winner
    return false;
  }
  // Get marked board numbers
  getMarked(): boolean[][] {
    return this.marked;
  }
  // Get numbers for testing
  getNumbers(): number[][] {
    return this.numbers;
  }
}
