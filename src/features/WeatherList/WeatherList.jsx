import PropTypes from 'prop-types';
import React from 'react';
import WeatherItem from '../WeatherItem';

const WeatherList = ({ weathers }) => (
  <div>
    {weathers.map((weather) => <WeatherItem weather={weather} key={weather.id} />)}
  </div>
);

WeatherList.propTypes = {
  weathers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default WeatherList;
