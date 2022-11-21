import { render } from '@testing-library/react';
import React from 'react';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<ErrorMessage error="Error: oops" />);
    expect(baseElement).toMatchSnapshot();
  });
});
