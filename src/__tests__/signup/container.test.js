import React from 'react';
import { shallow } from "enzyme";
import { SignupContainer, mapStateToProps } from "../../containers/signupContainer";

describe('tests signup container', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<SignupContainer {...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test onChange", () => {
    const event = {
      target: {
        name: "telephone",
        value: "0647837366"
      }
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state.telephone).toBe("0647837366");
  });

  it("should test onSubmit", () => {
    const props = {
      signupAction: jest.fn()
    };
    let wrapper = shallow(<SignupContainer {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit({ preventDefault: jest.fn() });
    expect(props.signupAction).toHaveBeenCalled();
  });

  it("should map state to props", () => {
    const initialState = {
      signup: {
        errors: {},
        signupResponse: {}
      }
    };
    expect(mapStateToProps(initialState)).toEqual({
      error: {},
      signup: {}
    });
  });

})
