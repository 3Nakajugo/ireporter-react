import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../components/Signup/Signup'


describe('<Signup/>', () => {
  it('should render signup component', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});