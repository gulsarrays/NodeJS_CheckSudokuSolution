class CheckSudokuSolution {
  constructor() {
    this.gridArray = [];
  }

  isValid(sudokuSolution) {
    return (
      this.checkRow(sudokuSolution) &&
      this.checkColumn(sudokuSolution) &&
      this.checkGrid(this.gridArray)
    );
  }

  checkRow(sudokuSolution) {
    // to get the new array with values instead of ref to original array
    const cloneArray = JSON.parse(JSON.stringify(sudokuSolution));
    let isDataCorrect = true;
    const correctData = '1,2,3,4,5,6,7,8,9';
    cloneArray.map(rowData => {
      if (rowData.sort().toString() !== correctData) {
        isDataCorrect = false;
      }
    });
    return isDataCorrect;
  }

  checkColumn(sudokuSolution) {
    const colArray = [];

    // need to push the empty array -  to create multi-dimensional structure
    for (let i = 0; i < 9; i++) {
      colArray.push([]);
      this.gridArray.push([]);
    }

    // to get the ecah coloumn data in a single array
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        colArray[col][row] = sudokuSolution[row][col];
        this.populateGridArray(row, col, sudokuSolution);
      }
    }

    return this.checkRow(colArray);
  }

  populateGridArray(row, col, sudokuSolution) {
    // Calculate grid identifiers
    const gridRow = Math.floor(row / 3);
    const gridCol = Math.floor(col / 3);
    const gridIndex = gridRow * 3 + gridCol;

    // Save each grid data in a new row
    this.gridArray[gridIndex].push(sudokuSolution[row][col]);
  }

  checkGrid() {
    if (!this.gridArray.length) return false;

    return this.checkRow(this.gridArray);
  }
}

const sudokuSolution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const SudokuSolution = new CheckSudokuSolution();
const isValid = SudokuSolution.isValid(sudokuSolution);
console.log('is Sudoku Solution Valid ? ', isValid);
