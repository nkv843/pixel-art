/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from './Popup.module.css';

const Popup = () => (
  <div>
    <div className={classNames.background} />
    <div className={classNames.popup}>
      <h2 className={classNames.title}>Tell us where you are :)</h2>
      <p className={classNames.descr}>it&aposs easier than typing</p>
      <button type="button" className={classNames.submit}>Allow</button>
      <button type="button" className={classNames.reject}>Reject</button>
      <button type="button" className={classNames.close} />
      <p className={classNames.status} />
    </div>
  </div>
);

export default Popup;
