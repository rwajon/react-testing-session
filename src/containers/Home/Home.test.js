import React from 'react';
import { shallow, mount } from '../../../config/enzyme.config';
import Home from '.';


const props = { value: 'something else', onChange: jest.fn(), results: [] };
const event = { target: { value: 'this is a value', } };

describe('<Home /> component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);
    wrapper.instance().onClick();
    expect(wrapper.state().error).toEqual('sorry, the input should not be empty');
    wrapper.instance().onChange(event);
    expect(wrapper).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const wrapper = mount(<Home />);
    const button = wrapper.find('button[type="submit"]');
    button.simulate('click');
    expect(wrapper.state().error).toEqual('sorry, the input should not be empty');
    expect(wrapper).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const wrapper = mount(<Home />);
    const input = wrapper.find('input[name="name"]');
    input.simulate('change', event);
    expect(wrapper.state().value).toEqual(event.target.value);
    expect(wrapper).toHaveLength(1);
  });
});
