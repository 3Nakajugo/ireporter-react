import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../redux/actions/types';
import { loginAction } from "../../redux/actions/loginAction";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('login actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should login a user successfully", () => {
    const data = {
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

    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const actionExpected = [
      {
        type: LOGIN_SUCCESS,
        payload: data
      }
    ];
    const userData = {
      user_name: "consolate",
      password: "nakakajahdfhd"
    };
    const store = mockStore({});
    return store
      .dispatch(loginAction(userData))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });

  it('should return errors on to login failure', () => {
    const error = {};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: error
      });
    });
    const actionExpected = [
      {
        type: LOGIN_FAILURE,
        payload: error
      }
    ];
    const userData = {
      user_name: "consolate",
      password: "d"
    };
    const store = mockStore({});
    return store
      .dispatch(loginAction(userData))
      .catch(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
})


