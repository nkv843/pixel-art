import React from 'react'
import classNames from '../WeatherTable.module.css'

const CurrentConditionFooter = ({speed, direction, cloudiness, humidity, pressure}) => {
  return (
    <div className={classNames.item__currentCondition}>
      <div className={classNames.item__windSpeed}>{speed}</div>
      <div className={classNames.item__windDirection}>{direction}</div>
      <div className={classNames.item__cloudiness}>{cloudiness}</div>
      <div className={classNames.item__humidity}>{humidity}</div>
      <div className={classNames.item__pressure}>{pressure} mm Hg</div>
    </div>
  )
}

export default CurrentConditionFooter
