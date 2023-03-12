/* eslint-disable react/display-name */
import React, { useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HexAlphaColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';
import {
  Box,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  InputLabel,
  CssBaseline,
  Grid,
} from '@mui/material';

const theme = createTheme({});

const GridCell = ({ side }) => {
  const [externalColor, setExternalColor] = useState('#ffffff');

  return (
    <Grid
      item
      sx={{ backgroundColor: externalColor }}
      xs={12 / side}
      onClick={(color) => setExternalColor(color)}
      border="1px solid #000000"
      height="32px"
    />
  );
};

const MyProvider = ({ children }) => {
  const MyContext = createContext();
  const [color, setColor] = useState('#ffffff');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyContext.Provider value={{ color, setColor }}>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  const [color, setColor] = useState('#ffffff');
  const [side, setSide] = React.useState(8);

  const handleChange = (event) => setSide(event.target.value);

  return (
    <MyProvider>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ m: 2 }}>
          <HexAlphaColorPicker color={color} onChange={setColor} />
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Side</InputLabel>
            <Select
              value={side}
              label="Side"
              onChange={handleChange}
            >
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={32}>32</MenuItem>
            </Select>
            <FormHelperText>Please choose</FormHelperText>
          </FormControl>
        </Box>
        <Box sx={{ m: 2 }}>
          <Grid container>
            {Array.from({ length: side * side }).map(() => (
              <GridCell
                key={Math.random()}
                side={side}
                color={color}
              />
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    </MyProvider>
  );
};

GridCell.propTypes = {
  color: PropTypes.string.isRequired,
  side: PropTypes.number.isRequired,
};

export default App;
