import { combineReducers } from 'redux';
import actorReducer from './actorReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer'

export default combineReducers({
  actor: actorReducer,
  auth: authReducer,
  error: errorReducer
})