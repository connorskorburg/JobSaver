import { createStore } from 'redux';
import usersReducer from './Users/users.reducer';

const store = createStore(usersReducer);

export default store;