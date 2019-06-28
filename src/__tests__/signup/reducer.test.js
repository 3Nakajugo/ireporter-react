import reducer from '../../redux/reducers/signupReducer';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../redux/actions/types';

const initialState = {
  errors: {},
  signupResponse: {},
}
const message = {
  data: [
    {
      user_name: "consolate"
    }
  ],
  message: "user has been created",
  status: 201
}

describe('signup reducer', () => {
  let newstate;
  it('tests the initail state of reducer', () => {
    const newstate = reducer(initialState, {});
    expect(newstate).toEqual(initialState);
  });

  it('tests succesful signup', () => {
    newstate = reducer(initialState,
      {
        type: SIGNUP_SUCCESS,
        payload: message
      });
    expect(newstate).toEqual({
      ...initialState,
      signupResponse: message
    });
  });

  it('tests unsuccesful signup', () => {
    newstate = reducer(initialState,
      {
        type: SIGNUP_FAILURE,
        payload: {}
      });
    expect(newstate).toEqual({
      ...initialState,
      errors: {}
    });
  });

})
