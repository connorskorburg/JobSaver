import { combineReducers } from 'redux';
import usersReducer from './Users/users.reducer';

const rootReducer = combineReducers({
  counter: usersReducer,
});
export default rootReducer;