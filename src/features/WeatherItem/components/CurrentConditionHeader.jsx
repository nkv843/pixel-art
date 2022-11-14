import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../WeatherItem.module.css';

const celciusDegree = ' °C';
const CurrentConditionHeader = ({
  location, time, temp, img, description,
}) => (
  <div className={classNames.item__header}>
    <div className={classNames.item__location}>{location}</div>
    <div className={classNames.item__time}>{time}</div>
    <div className={classNames.item__temp}>
      {temp}
      {celciusDegree}
    </div>
    <img src={img} alt="weather" style={{ height: '100%' }} />
    <div className={classNames.item__descr}>{description}</div>
  </div>
);

CurrentConditionHeader.propTypes = {
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CurrentConditionHeader;
