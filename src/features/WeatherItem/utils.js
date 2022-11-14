import weatherModifiers from './constants';

export default (weather) => {
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
  const minutesNow = dateTimeNow.getMinutes().toString().length === 1 ? `0${dateTimeNow.getMinutes()}` : dateTimeNow.getMinutes();
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
  const nearestToNow = formattedWeather.reduce((p, c) => {
    if (Math.abs(p.dateTime - dateTimeNow) < Math.abs(c.dateTime - dateTimeNow)) return p;
    return c;
  });
  const currentWeather = {
    ...nearestToNow,
    timepoint: timepointNow,
    dateTime: dateTimeNow,
    time: `${dateTimeNow.getHours()}:${minutesNow}`,
  };
  return { formattedWeather, currentWeather };
};
