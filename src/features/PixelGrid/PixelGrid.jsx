import { Box, Grid } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import { Context } from '../../app/providers';
import { depthFirstSearch } from '../../utils';

export const PixelGrid = () => {
  const [context, setContext] = useContext(Context);

  /**
 * Update the color of the specified cell and its adjacent cells (if applicable).
 * @param {Object} param - The cell's row and column.
 * @param {number} param.row - The row of the cell.
 * @param {number} param.column - The column of the cell.
 * @returns {Array} The updated grid.
 */
  const updateGrid = useCallback(({ row, column }) => {
    const {
      grid, color, size, affectAdjacent,
    } = context;

    if (affectAdjacent) {
      const log = Array.from(
        { length: size },
        () => Array.from(
          { length: size },
          () => ({ toPaint: false }),
        ),
      );

      depthFirstSearch({
        column, row, log, grid, color: grid[row][column].color,
      });

      // eslint-disable-next-line no-shadow
      grid.forEach((i, row) => i.forEach((k, column) => {
        if (log[row][column].toPaint) {
          grid[row][column].color = color;
        }
      }));

      return grid;
    }

    grid[row][column].color = color;
    return grid;
  });

  return (
    <Box flex="1">
      <Box m="0 auto" width={800}>
        <Grid container id="grid">
          {context.grid.map(
            (row) => row.map(
              (cell) => (
                <Grid
                  item
                  key={cell.id}
                  xs={12 / context.size}
                  bgcolor={cell.color}
                  border="1px solid black"
                  paddingBottom={`calc( 100% / ${context.size})`}
                  onClick={() => setContext({ ...context, grid: updateGrid(cell) })}
                />
              ),
            ),
          )}
        </Grid>
      </Box>
    </Box>
  );
};
