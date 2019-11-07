import React from 'react';
import { shallow } from '../../../config/enzyme.config';
import Home from '.';


describe('<Home /> component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toHaveLength(1);
  });
});
