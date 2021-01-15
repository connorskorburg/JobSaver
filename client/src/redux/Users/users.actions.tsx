import { GET_USER, SHOW_DASHBOARD } from './users.types';

export const fetchUser = () => {
  return {
    type: GET_USER,
  };
};

export const showDashboard = () => {
  return {
    type: SHOW_DASHBOARD,
  };
};