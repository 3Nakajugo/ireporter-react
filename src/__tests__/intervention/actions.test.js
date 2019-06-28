import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { FETCH_SUCCESS, FETCH_FAILURE } from '../../redux/actions/types';
import { interventionAction } from "../../redux/actions/interventionAction";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('login actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should fetch interventions successfully", () => {
    const data = {
      data: [
        {
          comment: "floods",
          createdby: "consolatem",
          date: "Fri, 28 Jun 2019 04:35:28 GMT",
          file: "edna.jpg",
          incident_id: 1,
          incident_type: "intervention",
          location: "ntinda",
          status: "draft"
        }
      ],
      message: "all interventions",
      status: 200

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
        type: FETCH_SUCCESS,
        payload:  [ {
          comment: "floods",
          createdby: "consolatem",
          date: "Fri, 28 Jun 2019 04:35:28 GMT",
          file: "edna.jpg",
          incident_id: 1,
          incident_type: "intervention",
          location: "ntinda",
          status: "draft"
        }]
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(interventionAction())
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
})

