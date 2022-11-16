import { render } from '@testing-library/react';
import React from 'react';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  let error;

  try {
    throw new Error('Ooooooops!');
  } catch (e) {
    error = `${e.name}: ${e.message}`;
  }

  const { baseElement } = render(<ErrorMessage error={ error }/>)

  it('should match snapshot', () => {
    expect(baseElement).toMatchSnapshot()
  });

});
