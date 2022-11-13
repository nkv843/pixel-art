/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherItem.module.css';

const ForecastItem = ({ title, temp, img }) => (
  <div className={classNames.forecast__item}>
    <p className={classNames.forecast__itemTitle}>{title}</p>
    <img className={classNames.forecast__itemIcon} src={img} alt="weather" />
    <p className={classNames.forecast__itemTemp}>
      {temp}
      {' '}
      &#176;C
    </p>
  </div>
);

export default ForecastItem;
