/* eslint-disable react/prop-types */
import React from 'react';
import classNames from '../WeatherTable.module.css';
import ForecastItem from './ForecastItem';

function DailyForecast({ resp }) {
  return (
    <div className={`${classNames.item__dailyForecast} ${classNames.daylyForecast}`}>
      {resp.splice(2, 8).map((item) => <ForecastItem key={item.index} temp={item.temp2m} title={`${item.dateTime.getHours()}:00`} img={item.weather.img} />)}
    </div>
  );
}

export default DailyForecast;
