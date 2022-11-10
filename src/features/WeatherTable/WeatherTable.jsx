import React from 'react';
import classNames from './WeatherTable.module.css'
import CurrentConditionFooter from './components/CurrentConditionFooter.jsx';
import DailyForecast from './components/DailyForecast.jsx';
import CurrentConditionHeader from './components/CurrentConditionHeader.jsx';
import WeeklyForecast from './components/WeeklyForecast.jsx';
import FavoriteButton from './components/FavoriteButton.jsx';
import {responseModifiers, resp} from './constants.js';

const init = resp.init
const initDateTimeStamp = new Date(`${init.slice(0,4)}-${init.slice(4,6)}-${init.slice(6,8)}T00:00:00`).getTime()  //UTC-0
const millisecondsInHour = 36e+5;
const localTimeZone = 2 // add another API
const userTimeZone = 2 // add another API
const timepointNow = (new Date(Date.now())).getHours() + localTimeZone - userTimeZone  //time in location of search.
const dateTimeNow = new Date(Date.now() + (localTimeZone - userTimeZone) * millisecondsInHour);
const formattedResp = resp.dataseries.map( item => {
  const timepoint = Number(resp.init.substring(8,10)) + item.timepoint + localTimeZone;
  const dateTime =  new Date(initDateTimeStamp + timepoint * millisecondsInHour);
  return {
    ...item,
    index: item.timepoint / 3 - 1,
    cloudcover: responseModifiers.cloudcover[item.cloudcover],
    wind10m: {...item.wind10m, speed: responseModifiers.windSpeed[item.wind10m.speed]},
    timepoint: timepoint,
    dateTime: dateTime,
    month: responseModifiers.monthNames[dateTime.getMonth()],
    weather: responseModifiers.weather[item.weather]
  }
})

const nearestToNow = formattedResp.reduce((prev, curr) => Math.abs(prev.dateTime - dateTimeNow) < Math.abs(curr.dateTime - dateTimeNow) ? prev: curr)

const current = {
  ...nearestToNow,
  timepoint: timepointNow,
  dateTime: dateTimeNow,
  time: `${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()}`,
}

const WeatherTable = () =>
    <div className={classNames.item}>
      <div className={classNames.item__content}>
        <div className={classNames.item__current}>
          <CurrentConditionHeader location={'Chisinau'} time={current.time} temp={current.temp2m} img={current.weather.img} description={current.weather.description}/>
          <DailyForecast resp={formattedResp}/>
          <CurrentConditionFooter speed={current.wind10m.speed} direction={current.wind10m.direction} cloudiness={current.cloudcover} humidity={current.rh2m} pressure={760}/>
        </div>
        <div className={classNames.verticalDivider}/>
        <WeeklyForecast resp={formattedResp}/>
      </div>
      <FavoriteButton/>
    </div>

export default WeatherTable
