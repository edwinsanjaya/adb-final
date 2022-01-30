import { combineReducers } from 'redux';
import actorReducer from './actorReducer';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer'

export default combineReducers({
  actor: actorReducer,
  article: articleReducer,
  auth: authReducer,
  error: errorReducer
})