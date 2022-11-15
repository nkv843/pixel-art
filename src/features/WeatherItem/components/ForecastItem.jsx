import React from 'react';
import PropTypes from 'prop-types';
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

ForecastItem.propTypes = {
  title: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default ForecastItem;
