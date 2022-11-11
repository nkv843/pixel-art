/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherTable.module.css';

const celciusDegree = '°C';
function CurrentConditionHeader({
  location, time, temp, img, description,
}) {
  return (
    <div className={classNames.item__header}>
      <div className={classNames.item__location}>{location}</div>
      <div className={classNames.item__time}>{time}</div>
      <div className={classNames.item__temp}>
        {temp}
        {' '}
        {celciusDegree}
      </div>
      <img src={img} alt="weather" style={{ height: '100%' }} />
      <div className={classNames.item__descr}>{description}</div>
    </div>
  );
}

export default CurrentConditionHeader;
