import { useState } from 'react';
import { geoapifyClient, sevenTimerClient } from '../api';
import prettifyWeatherData from '../utils';

const useSearchWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weathers, setWeathers] = useState([]);

  const execute = async (location) => {
    setLoading(true);
    try {
      const {
        address, timezone, latitude, longitude,
      } = await geoapifyClient.getDataByName(location);
      const weatherData = await sevenTimerClient.getWeatherData(longitude, latitude);
      const newWeather = {
        ...weatherData,
        id: Date.now(),
        address,
        timezone,
      };
      const formattedWeather = prettifyWeatherData(newWeather);
      setWeathers([formattedWeather, ...weathers]);
      setError(null);
    } catch (e) {
      setError(`${e.name}: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };
  return [execute, { loading, error, weathers }];
};

export default useSearchWeather;
