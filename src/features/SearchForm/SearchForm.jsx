import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [request, setRequest] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(request);
    setRequest('');
  };

  return (
    <form onSubmit={handleSubmit} className={classNames.form}>
      <input
        name="searchInput"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        className={classNames.input}
        placeholder="Some place"
        type="text"
        data-testid="searchInput"
      />
      <button data-testid="searchSubmit" type="submit" className={classNames.submit}>Answer!</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
