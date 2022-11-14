/* eslint-disable react/prop-types */
import React from 'react';
import WeatherItem from '../WeatherItem';

const WeatherList = ({ weathers }) => (
  <div>
    {weathers.map((weather) => <WeatherItem weather={weather} key={weather.id} />)}
  </div>
);

export default WeatherList;
