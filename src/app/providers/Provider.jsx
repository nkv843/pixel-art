import React from 'react';
import PropTypes from 'prop-types';
import { StylesProvider } from './StylesProvider';
import { ContextProvider } from './ContextProvider';

export const Provider = ({ children }) => (
  <StylesProvider>
    <ContextProvider>
      {children}
    </ContextProvider>
  </StylesProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
