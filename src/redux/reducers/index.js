import { combineReducers } from 'redux';
import screen from './screen';
import users from './users';

export default combineReducers({
  screen,
  users,
});
