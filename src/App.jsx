import React from 'react';
import SearchForm from './features/SearchForm';
import PageHeader from './components/PageHeader';
import WeatherList from './features/WeatherList';
import classNames from './App.module.css';
import useSearchWeather from './hooks/useSearchWeather';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [execute, { loading, error, weathers }] = useSearchWeather();

  if (weathers.length) {
    return (
      <div className={classNames.app}>
        <PageHeader loading={loading}>
          <SearchForm onSearch={execute} />
        </PageHeader>
        {error && <ErrorMessage error={error} />}
        <WeatherList weathers={weathers} />
      </div>
    );
  }
  return (
    <div className={classNames.app}>
      <PageHeader loading={loading}>
        <SearchForm onSearch={execute} />
      </PageHeader>
      {error
        ? <ErrorMessage error={error} />
        : <h1 className={classNames.title}>Let&apos;s start explore</h1>}
    </div>
  );
};

export default App;
