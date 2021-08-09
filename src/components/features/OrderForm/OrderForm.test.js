import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './OrderForm';

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderFormComponent />);
    expect(component).toBeTruthy();
  });
});
