import React from "react";
import classNames from'./PageHeader.module.css'

const PageHeader = ({children}) =>
  <header className={classNames.header}>
    <div className={classNames.container}>
      <div className={classNames.logo}></div>
      <h1 className={classNames.title}>WTWT in</h1>
      <div>{children}</div>
    </div>
  </header>

export default PageHeader
