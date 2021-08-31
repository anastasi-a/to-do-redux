import {
  ACTION_CREATE,
  ACTION_FILTER,
  ACTION_REMOVE,
  ACTION_REMOVE_COMPLETED,
  ACTION_TOGGLE,
  ACTION_TOGGLE_ALL,
  ACTION_TOGGLE_CHECK,
  ACTION_UPDATE
} from "../reducers";

export const create = (payload) => dispatch => {
  dispatch({type: ACTION_CREATE, payload});
  return Promise.resolve()
};
export const update = (payload) => ({type: ACTION_UPDATE, payload});
export const remove = (payload) => dispatch => {
  dispatch({type: ACTION_REMOVE, payload});
  return Promise.resolve()
};
export const toggle = (payload) => dispatch => {
  dispatch({type: ACTION_TOGGLE, payload});
  return Promise.resolve()
};
export const toggleAll = (payload) => ({type: ACTION_TOGGLE_ALL, payload});
export const removeCompleted = () => ({type: ACTION_REMOVE_COMPLETED});
export const filterTodo = (payload) => ({type: ACTION_FILTER, payload});
export const toggleCheck = () => ({type: ACTION_TOGGLE_CHECK});
