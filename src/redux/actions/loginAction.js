import axios from 'axios';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const loginAction = (data) => dispatch => {
  const signindata = { data }
  return axios.post('https://reporter-api.herokuapp.com/api/v2/auth/login',{
    headers:{'Content-Type': 'application/json'}},signindata)
    .then((response) => {
      toast.success("successfully logged in!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      localStorage.setItem("token", response.data.token);
      dispatch({
        type:LOGIN_SUCCESS,
        payload: response.data,
      });
      setTimeout(() => { window.location.href = '/intervention'; }, 2000);
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000});
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.message
      });
    });
};
