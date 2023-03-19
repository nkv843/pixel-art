/* eslint-disable no-param-reassign */
import { INITIAL_COLOR } from './constants';

/**
 * Creates a 2D grid with the given size.
 * @param {number} size - The size of the grid (must be a positive integer).
 * @returns {Array<Array<{
 * row: number, column: number, color: string, id: string
 * }>>} The created grid.
 */
export const createGrid = (size) => {
  const grid = Array.from(
    { length: size },
    (i, row) => Array.from(
      { length: size },
      (k, column) => ({
        row, column, color: INITIAL_COLOR, id: `${row}-${column}`,
      }),
    ),
  );
  return grid;
};

/**
 * Perform depth-first search on the grid starting from the specified cell
 * @param {Object} options - Options for the depth-first search
 * @param {Array<Array>} options.grid - The grid to search
 * @param {number} options.row - The starting row index
 * @param {number} options.column - The starting column index
 * @param {Object} options.log - The log to keep track of visited cells and cells to paint
 * @param {string} options.color - The color to search for
 */
export const depthFirstSearch = ({
  grid, row, column, log, color,
}) => {
  const gridSize = grid.length;
  // check if row and column are within bounds of the grid
  const isRowWithinBounds = row >= 0 && row < gridSize;
  const isColumnWithinBounds = column >= 0 && column < gridSize;
  // check if the cell has already been visited
  const isCellVisited = log?.[row]?.[column]?.visited;
  // check the color of the cell and if it matches the desired color
  const ownedColor = grid?.[row]?.[column]?.color;
  const isColorMatch = color === ownedColor;
  const searchBasis = { grid, log, color: ownedColor };

  if (isRowWithinBounds && isColumnWithinBounds && !isCellVisited) {
    log[row][column].visited = true;
    if (isColorMatch) {
      log[row][column].toPaint = true;

      // recursively search adjacent cells
      if (row - 1 >= 0) depthFirstSearch({ ...searchBasis, row: row - 1, column });
      if (row + 1 < gridSize) depthFirstSearch({ ...searchBasis, row: row + 1, column });
      if (column - 1 >= 0) depthFirstSearch({ ...searchBasis, row, column: column - 1 });
      if (column + 1 < gridSize) depthFirstSearch({ ...searchBasis, row, column: column + 1 });
    }
  }
};
