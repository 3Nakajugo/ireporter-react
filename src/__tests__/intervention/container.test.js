import React from 'react';
import { shallow } from "enzyme";
import { InterventionContainer, mapStateToProps } from "../../containers/interventionContainer";

describe('tests intervention container', () => {
  let wrapper;
  const props = {
    interventionAction: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<InterventionContainer {...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("should map state to props", () => {
    const initialState = {
      interventions: {
        errors: {},
        interventionResponse: {},
      }
    };
    expect(mapStateToProps(initialState)).toEqual({
      interventions: {}
    });
  });

})
