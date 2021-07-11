import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetailsComponent } from './ProductDetails';

describe('Component ProductDetails', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductDetailsComponent />);
    expect(component).toBeTruthy();
  });
});
