import PropTypes from 'prop-types';
import React from 'react';
import WeatherItem from '../WeatherItem';

const WeatherList = ({ weathers }) => (
  <div>
    {weathers.map((weather) => <WeatherItem weather={weather} key={weather.id} />)}
  </div>
);

WeatherList.propTypes = {
  weathers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.string,
    currentWeather: PropTypes.shape({
      timepoint: PropTypes.number,
      lifted_index: PropTypes.number,
      prec_amount: PropTypes.number,
      temp2m: PropTypes.number,
      index: PropTypes.number,
      cloudcover: PropTypes.string,
      prec_type: PropTypes.string,
      rh2m: PropTypes.string,
      month: PropTypes.string,
      time: PropTypes.string,
      dateTime: PropTypes.instanceOf(Date),
      wind10m: PropTypes.shape({
        direction: PropTypes.string,
        speed: PropTypes.string,
      }),
      weather: PropTypes.shape({
        img: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
    weeklyForecast: PropTypes.arrayOf(PropTypes.shape({
      timepoint: PropTypes.number,
      lifted_index: PropTypes.number,
      prec_amount: PropTypes.number,
      temp2m: PropTypes.number,
      index: PropTypes.number,
      cloudcover: PropTypes.string,
      prec_type: PropTypes.string,
      rh2m: PropTypes.string,
      month: PropTypes.string,
      dateTime: PropTypes.instanceOf(Date),
      wind10m: PropTypes.shape({
        direction: PropTypes.string,
        speed: PropTypes.string,
      }),
      weather: PropTypes.shape({
        img: PropTypes.string,
        description: PropTypes.string,
      }),
    })),
    dailyForecast: PropTypes.arrayOf(PropTypes.shape({
      timepoint: PropTypes.number,
      lifted_index: PropTypes.number,
      prec_amount: PropTypes.number,
      temp2m: PropTypes.number,
      index: PropTypes.number,
      cloudcover: PropTypes.string,
      prec_type: PropTypes.string,
      rh2m: PropTypes.string,
      month: PropTypes.string,
      dateTime: PropTypes.instanceOf(Date),
      wind10m: PropTypes.shape({
        direction: PropTypes.string,
        speed: PropTypes.string,
      }),
      weather: PropTypes.shape({
        img: PropTypes.string,
        description: PropTypes.string,
      }),
    })),
  })).isRequired,
};

export default WeatherList;
