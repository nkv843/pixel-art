import { render } from '@testing-library/react';
import React from 'react';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <PageHeader loading={false}>
        <p data-testid="headerChildren" />
      </PageHeader>,
    );
    const children = getByTestId('headerChildren');
    expect(children).toBeInTheDocument();
  });

  it('should hide loading while it is false', () => {
    const { getByTestId } = render(<PageHeader loading={false} />);
    expect(() => getByTestId('loading')).toThrow();
  });

  it('should indicate loading while it is true', () => {
    const { getByTestId } = render(<PageHeader loading />);
    const loadingIndicatior = getByTestId('loading');
    expect(loadingIndicatior).toBeInTheDocument();
  });

  it('should match snapshot with no props', () => {
    const { baseElement } = render(<PageHeader />);
    expect(baseElement).toMatchSnapshot();
  });
});
