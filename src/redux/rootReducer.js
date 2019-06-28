import { combineReducers } from 'redux';
import signupReducer from './reducers/signupReducer';
import loginReducer from './reducers/loginReducer';
import interventionReducer from './reducers/interventionReducer';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
  interventions: interventionReducer
});
