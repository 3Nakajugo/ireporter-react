import { FETCH_SUCCESS, FETCH_FAILURE } from '../actions/types';

const initialState = {
  errors: {},
  interventionResponse: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      interventionResponse: action.payload
    };
  case FETCH_FAILURE:
    return {
      ...state,
      interventionResponse: [],
      errors: action.payload
    };
  default:
    return state;
  }
}
