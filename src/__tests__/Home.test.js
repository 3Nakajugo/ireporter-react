import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home/Home';

describe('<Home />', () => {
  it('it should render the app', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
