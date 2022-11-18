import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchForm from '../SearchForm';

describe('SearchForm', () => {
  const mockHandleClick = jest.fn();
  it('should handle submit with correct value of request ', () => {
    const { getByTestId } = render(<SearchForm onSearch={mockHandleClick} />);
    const input = getByTestId('searchInput');
    const btn = getByTestId('searchSubmit');
    fireEvent.change(input, { target: { value: 'moscow' } });
    fireEvent.click(btn);
    expect(mockHandleClick).toHaveBeenCalledWith('moscow');
  });
});
