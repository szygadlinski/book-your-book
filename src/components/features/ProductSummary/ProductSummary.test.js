import React from 'react';
import { shallow } from 'enzyme';
import { ProductSummaryComponent } from './ProductSummary';

describe('Component ProductSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
