import React from 'react'
import classNames from '../WeatherTable.module.css'
import ForecastItem from './ForecastItem.jsx'

const WeeklyForecast = ({resp}) => {

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const weeklyForecast = [];
  for(let i = 1; i < 7; i++) {
    const dayMax = resp
    .filter(item => item.timepoint.getDate() === (new Date()).getDate() + i)
    .map((item) => {
      return {
        date: `${item.timepoint.getDate()} ${monthNames[item.timepoint.getMonth()]}`,
        temp: +item.temp2m,
        img: item.weather.img,
      }
    })
    .reduce((prev, curr) => prev.temp2m > curr.temp2m ? prev : curr)
    weeklyForecast.push(dayMax)
  }

  return (
    <div className={`${classNames.item__weeklyForecast} ${classNames.weeklyForecast}`} >
      {weeklyForecast.map(item => <ForecastItem key={item.date} temp={item.temp} title={item.date} img={item.img} />)}
    </div>
  )
}

export default WeeklyForecast
