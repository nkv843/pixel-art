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
      if (!location.length) {
        throw new Error("You don't even type anything!");
      }
      if (!location.trim()) {
        throw new Error('Too many spaces!');
      }
      if (Number(location)) {
        throw new Error('This is a phone nubmer, not a city!');
      }
      const {
        address, timezone, latitude, longitude,
      } = await geoapifyClient.getDataByName(location);
      if (!address) {
        throw new Error("Please try again, we can't find this settlement");
      }
      const weatherData = await sevenTimerClient.getWeatherData(longitude, latitude);
      const newWeather = {
        ...weatherData,
        id: Date.now(),
        address,
        timezone,
      };
      const formattedWeather = prettifyWeatherData(newWeather);
      setWeathers((prevState) => [formattedWeather, ...prevState]);
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
