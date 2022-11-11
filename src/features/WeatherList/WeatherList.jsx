/* eslint-disable react/prop-types */
import React from 'react';
import WeatherTable from '../WeatherTable';

function WeatherList({ weathers }) {
  return (
    <div>
      {weathers.map((weather) => <WeatherTable weather={weather} key={weather.id} />)}
    </div>
  );
}

export default WeatherList;
