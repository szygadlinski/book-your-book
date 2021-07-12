import React from 'react';
import { shallow } from 'enzyme';
import { CartProductComponent } from './CartProduct';

describe('Component CartProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartProductComponent />);
    expect(component).toBeTruthy();
  });
});
