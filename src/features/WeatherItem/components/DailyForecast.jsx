import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../WeatherItem.module.css';
import ForecastItem from './ForecastItem';

const DailyForecast = ({ forecast }) => (
  <div className={`${classNames.item__dailyForecast} ${classNames.daylyForecast}`}>
    {forecast.map((item) => <ForecastItem key={item.index} temp={item.temp2m} title={`${item.dateTime.getHours()}:00`} img={item.weather.img} />)}
  </div>
);

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default DailyForecast;
