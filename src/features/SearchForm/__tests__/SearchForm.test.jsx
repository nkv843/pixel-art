import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchForm from '../SearchForm';

describe('SearchForm', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(<SearchForm onSearch={handleClick} />);
  const input = getByTestId('searchInput');
  const btn = getByTestId('searchSubmit');

  it('should handle submit with correct value of request ', () => {
    fireEvent.change(input, { target: { value: 'moscow' } });
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledWith('moscow');
  });

});
