
import React from "react";
import classNames from './Popup.module.css'

const Popup = () => {
  return(
    <div>
      <div className={classNames.background}></div>
      <div className={classNames.popup} >
        <h2 className={classNames.title}>Tell us where you are :)</h2>
        <p className={classNames.descr}>it's easier than typing</p>
        <button className={classNames.submit}>Allow</button>
        <button className={classNames.reject}>Reject</button>
        <button className={classNames.close}></button>
        <p className={classNames.status}></p>
      </div>
    </div>
  )
}

export default Popup
