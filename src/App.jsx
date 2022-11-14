import React, { useState } from 'react';
import SearchForm from './features/SearchForm';
import PageHeader from './components/PageHeader';
import WeatherList from './features/WeatherList';
import classNames from './App.module.css';
import { geoapifyClient, sevenTimerClient } from './api';

const App = () => {
  const [weathers, setWeathers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createWeather = async (location) => {
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
      setWeathers([newWeather, ...weathers]);
    } catch (e) {
      setError(`${e.name}: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classNames.app}>
      <PageHeader loading={loading}>
        <SearchForm create={createWeather} />
      </PageHeader>
      {error && <h1 className={classNames.plug}>{error}</h1>}
      {weathers.length
        ? <WeatherList weathers={weathers} />
        : <h1 className={classNames.plug}>Let&apos;s start explore</h1>}
    </div>
  );
};

export default App;
