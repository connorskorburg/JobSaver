import { ACTIVE_CONTENT, SHOW_DASHBOARD } from './users.types';

const INITIAL_STATE = {
  user: {},
  sideNavShowing: true,
  activeContent: {
    'applications': true,
    'interviews': false,
    'network': false
  }  
};
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SHOW_DASHBOARD:
      return {
        ...state, sideNavShowing: !state.sideNavShowing,
      };
    case ACTIVE_CONTENT:
      return {
        ...state,
        activeContent: action.payload
      };
    default: return state;
  }
};
export default reducer;