import React from 'react';
import SearchForm from './features/SearchForm';
import Popup from './components/Popup/Popup';
import PageHeader from './components/PageHeader';
import WeatherTable from './features/WeatherTable';
import classNames from './App.module.css'


const App = () => {
  const params = (new URL(document.location)).searchParams;
  return (
    <div className={classNames.app}>
      {
        params.has('lon')
        ? <Popup/>
        : <div>
          <PageHeader>
            <SearchForm/>
          </PageHeader>
          <WeatherTable />
        </div>
      }
    </div>
  );
}

export default App;
