/* eslint-disable react/prop-types */
import React from 'react';
import classNames from './PageHeader.module.css';

function PageHeader({ children }) {
  return (
    <header className={classNames.header}>
      <div className={classNames.container}>
        <div className={classNames.logo} />
        <h1 className={classNames.title}>WTWT in</h1>
        <div>{children}</div>
      </div>
    </header>
  );
}

export default PageHeader;
