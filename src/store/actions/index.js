import {
  ACTION_CREATE,
  ACTION_FILTER,
  ACTION_REMOVE,
  ACTION_REMOVE_COMPLETED,
  ACTION_TOGGLE,
  ACTION_TOGGLE_ALL,
  ACTION_UPDATE
} from "../reducers";

export const create = (payload) => ({type: ACTION_CREATE, payload});
export const update = (payload) => ({type: ACTION_UPDATE, payload});
export const remove = (payload) => ({type: ACTION_REMOVE, payload});
export const toggle = (payload) => ({type: ACTION_TOGGLE, payload});
export const toggleAll = (payload) => ({type: ACTION_TOGGLE_ALL, payload});
export const removeCompleted = () => ({type: ACTION_REMOVE_COMPLETED});
export const filterTodo = (payload) => ({type: ACTION_FILTER, payload});
