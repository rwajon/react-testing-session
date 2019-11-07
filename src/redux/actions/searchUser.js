import { SEARCH_USER } from '../action-types/users';


export default (value) => (dispatch) => dispatch({
  type: SEARCH_USER,
  payload: value
});
