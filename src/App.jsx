import React, { useState } from 'react';
import SearchForm from './features/SearchForm';
import PageHeader from './components/PageHeader';
import WeatherList from './features/WeatherList';
import classNames from './App.module.css';
import { geoapifyClient, sevenTimerClient } from './api';

function App() {
  const [weathers, setWeathers] = useState([]);

  const weatherSMTHNG = async (location) => {
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
    setWeathers([...weathers, newWeather]);
  };

  return (
    <div className={classNames.app}>
      <PageHeader>
        <SearchForm create={weatherSMTHNG} />
      </PageHeader>
      {weathers.length
        ? <WeatherList weathers={weathers} />
        : <h1>Lets start explore</h1>}
    </div>
  );
}

export default App;
