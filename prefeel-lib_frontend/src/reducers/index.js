import { combineReducers } from 'redux';
import main from './main';
import practice from './practice';
import sidebar from './sidebar';

export default combineReducers({
  main,
  practice,
  sidebar,
});