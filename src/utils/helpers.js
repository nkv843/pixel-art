/* eslint-disable no-param-reassign */
import { INITIAL_COLOR } from './constants';

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

export const depthFirstSearch = ({
  grid, row, column, log, color,
}) => {
  const size = grid.length;
  const rowExist = row >= 0 && row < size;
  const columnExist = column >= 0 && column < size;
  const cellVisited = log?.[row]?.[column]?.visited;
  const ownedColor = grid?.[row]?.[column]?.color;
  const affected = color === ownedColor;
  const basis = { grid, log, color: ownedColor };

  if (rowExist && columnExist && !cellVisited) {
    log[row][column].visited = true;
    if (affected) {
      log[row][column].toPaint = true;

      if (row - 1 >= 0) depthFirstSearch({ ...basis, row: row - 1, column });
      if (row + 1 < size) depthFirstSearch({ ...basis, row: row + 1, column });
      if (column - 1 >= 0) depthFirstSearch({ ...basis, row, column: column - 1 });
      if (column + 1 < size) depthFirstSearch({ ...basis, row, column: column + 1 });
    }
  }
};
