import axios from 'axios';
import { toast } from 'react-toastify';
import { FETCH_SUCCESS, FETCH_FAILURE } from './types';

export const interventionAction = () => dispatch => {
  return axios.get('https://reporter-api.herokuapp.com//api/v2/interventions', {
    headers: { 
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json' }
  })
    .then((response) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_FAILURE,
        payload: error.response.data.message
      });
    });
};
