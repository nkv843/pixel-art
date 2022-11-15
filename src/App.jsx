import React from 'react';
import SearchForm from './features/SearchForm';
import PageHeader from './components/PageHeader';
import WeatherList from './features/WeatherList';
import classNames from './App.module.css';
import useSearchWeather from './hooks/useSearchWeather';

const App = () => {
  const [execute, { loading, error, weathers }] = useSearchWeather();

  return (
    <div className={classNames.app}>
      <PageHeader loading={loading}>
        <SearchForm onSearch={execute} />
      </PageHeader>
      {error && <h1 className={classNames.plug}>{error}</h1>}
      {weathers.length
        ? <WeatherList weathers={weathers} />
        : <h1 className={classNames.plug}>Let&apos;s start explore</h1>}
    </div>
  );
};

export default App;
