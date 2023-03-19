import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_COLOR, GRID_SIZES, createGrid } from '../../../utils';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const contextControl = useState({
    color: INITIAL_COLOR,
    grid: createGrid(GRID_SIZES[0]),
    size: GRID_SIZES[0],
    affectAdjacent: false,
    gridVisible: true,
  });

  return (
    <Context.Provider value={contextControl}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
