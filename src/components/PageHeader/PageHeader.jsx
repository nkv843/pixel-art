/* eslint-disable react/prop-types */
import React from 'react';
import classNames from './PageHeader.module.css';

const PageHeader = ({ children, loading }) => (
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

export default PageHeader;
