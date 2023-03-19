import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Context } from '../../app/providers';

export const ColorPicker = () => {
  const [context, setContext] = useContext(Context);

  return (
    <Box>
      <HexAlphaColorPicker
        color={context.color}
        onChange={(newColor) => setContext({ ...context, color: newColor })}
      />
      <TextField
        label="HEX"
        variant="outlined"
        sx={{ width: '200px', mt: 2 }}
        value={context.color}
        onChange={(e) => {
          setContext({ ...context, color: e.target.value });
        }}
      />
    </Box>
  );
};
