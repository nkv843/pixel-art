/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherTable.module.css';

function ForecastItem({ title, temp, img }) {
  return (
    <div className={classNames.forecast__item}>
      <p className={classNames.forecast__itemTitle}>{title}</p>
      <img src={img} alt="weather" />
      <p className={classNames.forecast__itemTemp}>
        {temp}
        {' '}
        &#176;C
      </p>
    </div>
  );
}

export default ForecastItem;
