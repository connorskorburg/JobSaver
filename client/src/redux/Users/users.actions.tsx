import { GET_USER } from './users.types';

export const fetchUser = () => {
  return {
    type: GET_USER,
  };
};