import React from 'react';
import PropTypes from 'prop-types';
import classNames from './WeatherItem.module.css';
import CurrentConditionFooter from './components/CurrentConditionFooter';
import DailyForecast from './components/DailyForecast';
import CurrentConditionHeader from './components/CurrentConditionHeader';
import WeeklyForecast from './components/WeeklyForecast';
import FavoriteButton from './components/FavoriteButton';

const WeatherItem = ({ weather }) => (
  <div className={classNames.item}>
    <div className={classNames.item__content}>
      <div className={classNames.item__current}>
        <CurrentConditionHeader
          location={weather.address}
          time={weather.currentWeather.time}
          temp={weather.currentWeather.temp2m}
          img={weather.currentWeather.weather.img}
          description={weather.currentWeather.weather.description}
        />
        <DailyForecast forecast={weather.dailyForecast} />
        <CurrentConditionFooter
          speed={weather.currentWeather.wind10m.speed}
          direction={weather.currentWeather.wind10m.direction}
          cloudiness={weather.currentWeather.cloudcover}
          humidity={weather.currentWeather.rh2m}
          pressure={760}
        />
      </div>
      <div className={classNames.verticalDivider} />
      <WeeklyForecast forecast={weather.weeklyForecast} />
    </div>
    <FavoriteButton />
  </div>
);

WeatherItem.propTypes = {
  weather: PropTypes.shape({
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
  }).isRequired,
};

export default WeatherItem;
