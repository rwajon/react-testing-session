import React from 'react';
import { shallow } from '../../../config/enzyme.config';
import Home from '.';


const props = { value: 'something else', onChange: jest.fn(), results: [] };

describe('<Home /> component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home {...props} />);
    const input = wrapper.find('input[name="name"]');
    expect(input.props().value).toEqual(props.value);
    expect(wrapper).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const newProps = {
      ...props,
      results: ['Jonh']
    };
    const wrapper = shallow(<Home {...newProps} />);
    const input = wrapper.find('input[name="name"]');
    expect(input.props().value).toEqual(props.value);
    expect(wrapper).toHaveLength(1);
  });
});
