import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useContext } from 'react';
import { GRID_SIZES, createGrid } from '../../utils';
import { Context } from '../../app/providers';

export const SizePicker = () => {
  const [context, setContext] = useContext(Context);

  return (
    <Box>
      <FormControl>
        <InputLabel>Size of the grid</InputLabel>
        <Select
          value={context.size}
          label="Size of the grid"
          sx={{ width: '200px' }}
          onChange={(e) => setContext({
            ...context, size: e.target.value, grid: createGrid(e.target.value),
          })}
        >
          { GRID_SIZES.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          )) }
        </Select>
      </FormControl>
    </Box>
  );
};
