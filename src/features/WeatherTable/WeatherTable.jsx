import React from 'react';
import classNames from './WeatherTable.module.css'
import CurrentConditionFooter from './components/CurrentConditionFooter.jsx';
import DailyForecast from './components/DailyForecast.jsx';
import CurrentConditionHeader from './components/CurrentConditionHeader.jsx';
import WeeklyForecast from './components/WeeklyForecast.jsx';
import FavoriteButton from './components/FavoriteButton.jsx';
import {responseModifiers, resp} from './constants.js';

const WeatherTable = () => {

  const normResp = resp.map( item => {
    return {
      ...item,
      cloudcover: responseModifiers.cloudcover[item.cloudcover],
      wind10m: {...item.wind10m, speed: responseModifiers.windSpeed[item.wind10m.speed]},
      timepoint: new Date(Date.now() + ((item.timepoint - 32) * 36e+5) - (Date.now() % 36e+5)),
      weather: responseModifiers.weather[item.weather]
    }
  });

  const current = {...normResp[2], time: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`}

  return (
    <div className={classNames.item}>
      <div className={classNames.item__content}>
        <div className={classNames.item__current}>
          <CurrentConditionHeader location={'Chisinau'} time={current.time} temp={current.temp2m} img={current.weather.img} description={current.weather.description}/>
          <DailyForecast resp={normResp}/>
          <CurrentConditionFooter speed={current.wind10m.speed} direction={current.wind10m.direction} cloudiness={current.cloudcover} humidity={current.rh2m} pressure={760}/>
        </div>
        <div className={classNames.verticalDivider}/>
        <WeeklyForecast resp={normResp}/>
      </div>
      <FavoriteButton/>
    </div>
  )
}

export default WeatherTable
