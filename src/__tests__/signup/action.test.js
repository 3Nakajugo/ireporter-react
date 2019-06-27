import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../redux/actions/types';
import { signupAction } from "../../redux/actions/signupActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('signup actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should signup a user successfully", () => {
    const data = {
      "data": [
        {
          "user_name": "consolate"
        }
      ],
      "message": "user has been created",
      "status": 201
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data
      });
    });
    const actionExpected = [
      {
        type: SIGNUP_SUCCESS,
        payload: data
      }
    ];
    const userData = {
      "first_name": "edna",
      "last_name": "nakajugo",
      "telephone": "8948690865",
      "user_name": "consolate",
      "email": "nakajugo@gmial.com",
      "password": "nakakajahdfhd"
    };
    const store = mockStore({});
    return store
      .dispatch(signupAction(userData))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
})


