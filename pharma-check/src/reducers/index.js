import { combineReducers } from 'redux';
import fetchDetailsReducer from './fetchDetailsReducer';

export default combineReducers({
  resultdata: fetchDetailsReducer
});
console.log(fetchDetailsReducer)