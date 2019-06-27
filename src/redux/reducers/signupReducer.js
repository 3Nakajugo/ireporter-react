import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

const initialState = {
  errors: {},
  signupResponse: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SIGNUP_SUCCESS:
    return {
      ...state,
      errors: {},
      signupResponse: action.payload,
    };
  case SIGNUP_FAILURE:
    return {
      ...state,
      signupResponse: {},
      errors: action.payload,
    };
  default:
    return state;
  }
};
