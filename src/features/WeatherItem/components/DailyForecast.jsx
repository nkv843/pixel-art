import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../WeatherItem.module.css';
import ForecastItem from './ForecastItem';

const DailyForecast = ({ forecast }) => (
  <div className={`${classNames.item__dailyForecast} ${classNames.daylyForecast}`}>
    {forecast.map((item) => (
      <ForecastItem
        key={item.index}
        temp={item.temp2m}
        title={item.time}
        img={item.weather.img}
      />
    ))}
  </div>
);

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default DailyForecast;
