import React from 'react';
import PropTypes from 'prop-types';
import classNames from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => (
  <div className={classNames.message}>
    <span>Oops, something went wrong 🥲</span>
    <br />
    <span>⚒️</span>
    {error}
  </div>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
