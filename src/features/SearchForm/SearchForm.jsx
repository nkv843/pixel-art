/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classNames from './SearchForm.module.css';

function SearchForm({ create }) {
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    create(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className={classNames.form}>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={classNames.input}
        placeholder="Some place"
        type="text"
      />
      <button type="submit" className={classNames.submit}>Answer!</button>
    </form>
  );
}

export default SearchForm;
