import React from 'react';
import PropTypes from 'prop-types';
import classNames from './PageHeader.module.css';

const PageHeader = ({ loading, children }) => (
  <header className={classNames.header}>
    <div className={classNames.container}>
      <div className={classNames.logo} />
      <h1 className={classNames.title}>WTWT in</h1>
      <div>{children}</div>
      {loading
        ? <h1 className={classNames.loading}>Loading</h1>
        : null}
    </div>
  </header>
);

PageHeader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element,
};

PageHeader.defaultProps = {
  loading: false,
  children: '',
};

export default PageHeader;
