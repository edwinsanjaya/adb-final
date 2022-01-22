import { combineReducers } from 'redux';
import actorReducer from './actorReducer';

export default combineReducers({
  actor: actorReducer
})