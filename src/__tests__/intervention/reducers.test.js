import reducer from '../../redux/reducers/interventionReducer';
import { FETCH_SUCCESS, FETCH_FAILURE } from '../../redux/actions/types';

const initialState = {
  errors: {},
  interventionResponse: []
};

const message = {
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
  "message": "all interventions",
  "status": 200
}

describe('intervention reducer', () => {
  let newstate;
  it('tests the initail state of reducer', () => {
    const newstate = reducer(initialState, {});
    expect(newstate).toEqual(initialState);
  });

  it('tests succesful fetch ofall interventions', () => {
    newstate = reducer(initialState,
      {
        type:FETCH_SUCCESS,
        payload: message
      });
    expect(newstate).toEqual({
      interventionResponse: message,
      errors: {},
    });
  });

  it('tests unsuccesful fetch', () => {
    newstate = reducer(initialState,
      {
        type: FETCH_FAILURE,
        payload: {}
      });
    expect(newstate).toEqual({
      ...initialState,
      errors: {}
    });
  });

})
