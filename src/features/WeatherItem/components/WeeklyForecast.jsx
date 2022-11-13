/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherItem.module.css';
import ForecastItem from './ForecastItem';

const WeeklyForecast = ({ resp }) => {
  const weeklyForecast = [];
  for (let i = 1; i < 7; i += 1) {
    const dayMax = resp
      .filter((item) => item.dateTime.getDate() === (new Date()).getDate() + i)
      .reduce((prev, curr) => (prev.temp2m > curr.temp2m ? prev : curr));
    weeklyForecast.push(dayMax);
  }

  return (
    <div className={`${classNames.item__weeklyForecast} ${classNames.weeklyForecast}`}>
      {weeklyForecast.map((item) => <ForecastItem key={item.index} temp={item.temp2m} title={`${item.dateTime.getDate()} ${item.month}`} img={item.weather.img} />)}
    </div>
  );
};

export default WeeklyForecast;
