import { GET_USER } from './users.types';

const INITIAL_STATE = {
  user: {},
};
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state, user: {"name": "Bob"},
      };
    default: return state;
  }
};
export default reducer;