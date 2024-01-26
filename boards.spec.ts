// Import testing libraries
import { Boards } from "./boards";
import { Board } from "./board";

// Boards test suite
describe("Boards", () => {
  // Boards instance for tests
  let boards: Boards;

  // Initialize fresh boards before each test
  beforeEach(() => {
    boards = new Boards();
  });

  // Test getBoards loads boards from files
  it("gets boards from files", () => {
    // Sample board values
    const board1 = new Board(`22 13 17 11 0
    8 2 23 4 24
    21 9 14 16 7
    6 10 3 18 5
    1 12 20 15 19`);
    const board2 = new Board(`3 15 0 2 22
    9 18 13 17 5
    19 8 7 25 23
    20 11 10 24 4
    14 21 16 12 6`);

    // Call method under test
    const loadedBoards = boards.getBoards();
    // Assertions
    expect(loadedBoards.length).toBeGreaterThan(2);
    expect(loadedBoards).toContainEqual(board1);
    expect(loadedBoards).toContainEqual(board2);
  });
});
