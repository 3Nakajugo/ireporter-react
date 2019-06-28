import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../components/Login/login'


describe('<LoginComponent />', () => {
  it('should render login component', () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});