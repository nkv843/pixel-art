import React, { useContext } from 'react';
import { Stack, Switch, InputLabel } from '@mui/material';
import {
  FormatColorFill,
} from '@mui/icons-material';
import { Context } from '../../app/providers';

export const FillSwitch = () => {
  const [context, setContext] = useContext(Context);

  return (
    <Stack direction="row" alignItems="center">
      <FormatColorFill color="disabled" />
      <Switch
        checked={context.affectAdjacent}
        onChange={(e) => {
          setContext({ ...context, affectAdjacent: e.target.checked });
        }}
      />
      <InputLabel>Fill in adjacent</InputLabel>
    </Stack>
  );
};
