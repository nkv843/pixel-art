/* eslint-disable import/named */
import weatherModifiers from './constants';

export default function prettifyWeatherData(weather) {
  const { init } = weather;
  const initDateTimeStamp = new Date(`${init.slice(0, 4)}-${init.slice(4, 6)}-${init.slice(6, 8)}`).getTime(); // UTC-0
  const millisecInHour = 36e+5;
  const localTimeZone = weather.timezone;
  // (UTC - user time)
  const userTimeZone = (new Date().getTimezoneOffset()) / 60;
  const timeShiftUTC = localTimeZone + userTimeZone;
  // in location of search.
  const timepointNow = (new Date(Date.now())).getHours() + timeShiftUTC;
  // in location of search
  const dateTimeNow = new Date(Date.now() + timeShiftUTC * millisecInHour);
  const formattedWeather = weather.dataseries.map((item) => {
    const timepoint = Number(weather.init.substring(8, 10)) + item.timepoint + localTimeZone;
    const dateTime = new Date(initDateTimeStamp + timepoint * millisecInHour);
    return {
      ...item,
      index: item.timepoint / 3 - 1,
      cloudcover: weatherModifiers.cloudcover[item.cloudcover],
      wind10m: { ...item.wind10m, speed: weatherModifiers.windSpeed[item.wind10m.speed] },
      timepoint,
      dateTime,
      month: weatherModifiers.monthNames[dateTime.getMonth()],
      weather: weatherModifiers.weather[item.weather],
    };
  });
  // eslint-disable-next-line max-len
  const nearestToNow = formattedWeather.reduce((p, c) => (Math.abs(p.dateTime - dateTimeNow) < Math.abs(c.dateTime - dateTimeNow) ? p : c));
  const currentWeather = {
    ...nearestToNow,
    timepoint: timepointNow,
    dateTime: dateTimeNow,
    time: `${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()}`,
  };
  return { formattedWeather, currentWeather };
}
