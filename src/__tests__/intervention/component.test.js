import React from 'react';
import { shallow } from 'enzyme';
import InterventionComponent from '../../components/Intervention'


describe('<InterventionComponent />', () => {
  const props = {
    state: {
      interventions:[ {
        comment: "floods",
        createdby: "consolatem",
        date: "Fri, 28 Jun 2019 04:35:28 GMT",
        file: "edna.jpg",
        incident_id: 1,
        incident_type: "intervention",
        location: "ntinda",
        status: "draft"
      }]
    }
  };
  it('should render intervention component', () => {
    const wrapper = shallow(<InterventionComponent {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});