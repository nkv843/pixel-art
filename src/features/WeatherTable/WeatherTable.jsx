/* eslint-disable react/prop-types */
import React from 'react';
import classNames from './WeatherTable.module.css';
import CurrentConditionFooter from './components/CurrentConditionFooter';
import DailyForecast from './components/DailyForecast';
import CurrentConditionHeader from './components/CurrentConditionHeader';
import WeeklyForecast from './components/WeeklyForecast';
import FavoriteButton from './components/FavoriteButton';
import prettifyWeatherData from './utils';

function WeatherTable({ weather }) {
  const { currentWeather, formattedWeather } = prettifyWeatherData(weather);

  return (
    <div className={classNames.item}>
      <div className={classNames.item__content}>
        <div className={classNames.item__current}>
          <CurrentConditionHeader
            location={weather.address}
            time={currentWeather.time}
            temp={currentWeather.temp2m}
            img={currentWeather.weather.img}
            description={currentWeather.weather.description}
          />
          <DailyForecast resp={formattedWeather} />
          <CurrentConditionFooter
            speed={currentWeather.wind10m.speed}
            direction={currentWeather.wind10m.direction}
            cloudiness={currentWeather.cloudcover}
            humidity={currentWeather.rh2m}
            pressure={760}
          />
        </div>
        <div className={classNames.verticalDivider} />
        <WeeklyForecast resp={formattedWeather} />
      </div>
      <FavoriteButton />
    </div>
  );
}

export default WeatherTable;
