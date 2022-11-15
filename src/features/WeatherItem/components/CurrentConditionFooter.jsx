import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../WeatherItem.module.css';

const CurrentConditionFooter = ({
  speed, direction, cloudiness, humidity, pressure,
}) => (
  <div className={classNames.item__currentCondition}>
    <div className={classNames.item__wind}>
      <div className={classNames.item__windSpeed}>{speed}</div>
      <div className={classNames.item__windDirection}>{direction}</div>
    </div>
    <div className={classNames.item__cloudiness}>{cloudiness}</div>
    <div className={classNames.item__humidity}>{humidity}</div>
    <div className={classNames.item__pressure}>
      {pressure}
      {' '}
      mm Hg
    </div>
  </div>
);

CurrentConditionFooter.propTypes = {
  speed: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  cloudiness: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default CurrentConditionFooter;
