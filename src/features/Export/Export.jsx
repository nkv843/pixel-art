import html2canvas from 'html2canvas';
import React, { useState } from 'react';
import {
  Button, MenuItem, FormControl, InputLabel, Select,
} from '@mui/material';
import { FORMATS } from '../../utils';

export const Export = () => {
  const [userFormat, setUserFormat] = useState(FORMATS[0]);

  const handleExport = () => {
    html2canvas(document.getElementById('grid')).then((canvas) => {
      const imgData = canvas.toDataURL(`image/${userFormat}`);
      const link = document.createElement('a');
      link.download = `myPicture.${userFormat}`;
      link.href = imgData;
      link.click();
    });
  };

  return (
    <>
      <FormControl>
        <InputLabel>Output format</InputLabel>
        <Select
          value={userFormat}
          label="Output format"
          sx={{ width: '200px' }}
          onChange={(e) => setUserFormat(e.target.value)}
        >
          { FORMATS.map((format) => (
            <MenuItem key={format} value={format}>
              {format}
            </MenuItem>
          )) }
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={handleExport}>Download</Button>
    </>
  );
};
