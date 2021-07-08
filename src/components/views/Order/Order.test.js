import React from 'react';
import { shallow } from 'enzyme';
import { OrderComponent } from './Order';

describe('Component Order', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderComponent />);
    expect(component).toBeTruthy();
  });
});
