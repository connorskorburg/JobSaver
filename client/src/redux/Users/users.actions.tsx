import { SHOW_DASHBOARD, ACTIVE_CONTENT } from './users.types';

// export const fetchUser = () => {
  // return {
    // type: GET_USER,
  // };
// };


export const showDashboard = () => {
  return {
    type: SHOW_DASHBOARD,
  };
};

export const displayContent = () => {
  return {
    type: ACTIVE_CONTENT,
  };
};