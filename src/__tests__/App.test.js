import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('<App />', () => {
  it('it should render the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
