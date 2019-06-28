import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
  errors: {},
  loginResponse: {},
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      errors: {},
      loginResponse: action.payload,
      isLoggedIn: true
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      loginResponse: {},
      errors: action.payload,
      isLoggedIn: false
    };
  default:
    return state;
  }
};