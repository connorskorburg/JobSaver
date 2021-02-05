import { SHOW_DASHBOARD, ACTIVE_CONTENT } from './users.types';

export const showDashboard = () => {
  return {
    type: SHOW_DASHBOARD,
  };
};

export const displayContent = (content: object) => {
  return {
    type: ACTIVE_CONTENT,
    payload: content
  };
};