import { SHOW_DASHBOARD } from './users.types';

const INITIAL_STATE = {
  user: {},
  sideNavShowing: true,
};
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SHOW_DASHBOARD:
      return {
        ...state, sideNavShowing: !state.sideNavShowing,
      };
    default: return state;
  }
};
export default reducer;