/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherItem.module.css';
import ForecastItem from './ForecastItem';

const DailyForecast = ({ resp }) => (
  <div className={`${classNames.item__dailyForecast} ${classNames.daylyForecast}`}>
    {resp.splice(2, 8).map((item) => <ForecastItem key={item.index} temp={item.temp2m} title={`${item.dateTime.getHours()}:00`} img={item.weather.img} />)}
  </div>
);

export default DailyForecast;
