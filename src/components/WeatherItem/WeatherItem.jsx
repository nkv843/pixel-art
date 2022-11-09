import React from 'react';
import classNames from './WeatherItem.module.css'
import  '../../img/weather/clear.svg'

const WeatherItem = () => {
  return(
    <div className = {classNames.item}>
      <div className={classNames.item__content}>
      <div className = {classNames.item__current}>
        <div className = {classNames.item__header}>
          <div className = {classNames.item__location}>Chisinau</div>
          <div className = {classNames.item__time}>12:13</div>
          <div className = {classNames.item__temp}>13 &#176;C</div>
          <div className = {classNames.item__icon + ' ' + classNames.item__littleSnow} ></div>
          <div className = {classNames.item__descr}>Partly cloudy</div>
        </div>
        <div className = {classNames.item__dailyForecast + ' ' + classNames.daylyForecast} >
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>15:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>18:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>21:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>00:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>03:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>06:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-1 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>09:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-2 &#176;C</p>
          </div>
          <div className = {classNames.daylyForecast__item}>
            <p className={classNames.dailyForecast__itemDate}>12:00</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.dailyForecast__itemTemp}>-4 &#176;C</p>
          </div>
        </div>
        <div className = {classNames.item__currentCondition}>
          <div className = {classNames.item__wind} wind>
            <div className = {classNames.wind__speed}>1 km/h</div>
            <div className = {classNames.wind__direction}>SW</div>
          </div>
          <div className = {classNames.item__cloudiness}>30%</div>
          <div className = {classNames.item__humidity}>10%</div>
          <div className = {classNames.item__}>756 mm рт ст</div>
        </div>
      </div>
      <div className = {classNames.item__forecast + ' ' + classNames.forecast} >
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>11.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>-1 &#176;C</p>
        </div>
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>12.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>-1 &#176;C</p>
        </div>
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>13.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>-3 &#176;C</p>
        </div>
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>14.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>-1 &#176;C</p>
        </div>
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>15.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>+2 &#176;C</p>
        </div>
        <div className = {classNames.forecast__item}>
            <p className={classNames.forecast__itemDate}>16.09</p>
            <div className = {classNames.forecast__itemIcon + ' ' + classNames.item__littleSnow}></div>
            <p className={classNames.forecast__itemTemp}>-3 &#176;C</p>
        </div>
      </div>
      </div>
      <button className = {classNames.item__addToFav}>
        <svg className = {classNames.item__addToFavIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z"/></svg>
      </button>
    </div>
  )
}

export default WeatherItem
