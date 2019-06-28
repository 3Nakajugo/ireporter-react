import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar';

describe('<App />', () => {
  it('it should render the app', () => {
    const wrapper = shallow(<App />);
    const homewrapper = shallow(<Home />);
    const navwrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
    expect(homewrapper).toMatchSnapshot();
    expect(navwrapper).toMatchSnapshot();
  });
});
