import React from 'react';
import { Stack } from '@mui/material';
import {
  ColorPicker, SizePicker, PixelGrid, FillSwitch, Export,
} from '../features';
import { Provider } from './providers';

const App = () => (
  <Provider>
    <Stack direction="row" spacing={3} justifyContent="flex-start" m={5}>
      <Stack spacing={3} justifyContent="flex-start">
        <ColorPicker />
        <SizePicker />
        <FillSwitch />
        <Export />
      </Stack>
      <PixelGrid />
    </Stack>
  </Provider>
);

export default App;
