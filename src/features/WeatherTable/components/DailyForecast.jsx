import React from 'react'
import classNames from '../WeatherTable.module.css'
import ForecastItem from './ForecastItem.jsx'

const DailyForecast = ({resp}) => {

  const dailyForecast = resp
    .splice(1,8)
    .map((item) => {
      return {
        time: `${item.timepoint.getHours()}:00`,
        temp: item.temp2m,
        img: item.weather.img,
      }})

  return (
    <div className={`${classNames.item__dailyForecast} ${classNames.daylyForecast}`} >
      {dailyForecast.map(item => <ForecastItem key={item.time} temp={item.temp} title={item.time} img={item.img} /> )}
    </div>
  )
}

export default DailyForecast
