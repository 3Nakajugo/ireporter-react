import React from 'react';
import { shallow } from "enzyme";
import { LoginContainer, mapStateToProps } from "../../containers/loginContainer";

describe('tests login container', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<LoginContainer{...props} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test onChange", () => {
    const event = {
      target: {
        name: "user_name",
        value: "edinah"
      }
    };
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state.user_name).toBe("edinah");
  });

  it("should test onSubmit", () => {
    const props = {
      loginAction: jest.fn()
    };
    let wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    instance.onSubmit({ preventDefault: jest.fn() });
    expect(props.loginAction).toHaveBeenCalled();
  });

  it("should map state to props", () => {
    const initialState = {
      login: {
        errors: {},
        loginResponse: {},
        isLoggedIn: false
      }
    };
    expect(mapStateToProps(initialState)).toEqual({
      login: {}
    });
  });

})
