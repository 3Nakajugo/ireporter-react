import reducer from '../../redux/reducers/loginReducer';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../redux/actions/types';

const initialState = {
  errors: {},
  loginResponse: {},
  isLoggedIn: false
}
const message = {
  data: [
    {
      email: "nakajugo@gmail.com",
      first_name: "edna",
      isadmin: false,
      last_name: "nakajugo",
      password: "consolate12",
      registered: "Thu, 27 Jun 2019 19:27:57 GMT",
      telephone: "0781370907",
      user_id: 9,
      user_name: "consolatem"
    }
  ],
  message: "successfully logged in",
  status: 200,
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiY29uc29sYXRlbSIsImlzYWRtaW4iOmZhbHNlLCJleHAiOjE1NjE3Njg2OTN9.Mr1dzAnrZVeQPIn35qoaA7p7stODXhQFfrgceaqNcXU"
}

describe('login reducer', () => {
  let newstate;
  it('tests the initail state of reducer', () => {
    const newstate = reducer(initialState, {});
    expect(newstate).toEqual(initialState);
  });

  it('tests succesful login', () => {
    newstate = reducer(initialState,
      {
        type: LOGIN_SUCCESS,
        payload: message
      });
    expect(newstate).toEqual({
      loginResponse: message,
      errors: {},
      isLoggedIn: true
    });
  });

  it('tests unsuccesful login', () => {
    newstate = reducer(initialState,
      {
        type: LOGIN_FAILURE,
        payload: {}
      });
    expect(newstate).toEqual({
      ...initialState,
      errors: {}
    });
  });

})
