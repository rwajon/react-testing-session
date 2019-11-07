import { SEARCH_USER } from '../action-types/users';
import { users as initialState } from '../initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_USER:
      return {
        ...state,
        users: [],
        loading: true,
        currentUsers: state.users.filter((user) => user.includes(payload)),
        currentValue: payload
      };
    default:
      return state;
  }
};
