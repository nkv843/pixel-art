import { render } from '@testing-library/react';
import React from 'react';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {

  const { getByTestId } = render(
    <PageHeader loading={false}>
      <h1 data-testid="headerChildren"></h1>
    </PageHeader>);

  it('should render children', () => {
    const children = getByTestId("headerChildren")
    expect(children).toBeInTheDocument()
  });

  it('should hide loading while it false', () => {
    expect(()=> getByTestId("loading")).toThrow()
  });

  it('should indicate loading while it true', () => {
    render(<PageHeader loading={true}/>);
    const loadingIndicatior = getByTestId("loading");
    expect(loadingIndicatior).toBeInTheDocument()
  });

  it('should match snapshot with no props', () => {
    const { baseElement } = render(<PageHeader/>);
    expect(baseElement).toMatchSnapshot()
  });

});
