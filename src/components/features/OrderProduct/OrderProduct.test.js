import React from 'react';
import { shallow } from 'enzyme';
import { OrderProductComponent } from './OrderProduct';

describe('Component OrderProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderProductComponent />);
    expect(component).toBeTruthy();
  });
});
