import axios from 'axios';
import { toast } from 'react-toastify';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';

export const signupAction = (data
) => dispatch => {
  const signupdata = { data }
  return axios.post('https://reporter-api.herokuapp.com/api/v2/auth/signup',{
    headers:{'Content-Type': 'application/json'}
  },signupdata)
    .then((response) => {
      toast.success("successfully logged in!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000
      });
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response.data.message
      });
    });
};
