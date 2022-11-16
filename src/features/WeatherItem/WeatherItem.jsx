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
  weather: PropTypes.shape().isRequired,
};

export default WeatherItem;
