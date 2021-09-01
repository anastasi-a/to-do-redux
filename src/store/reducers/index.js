import {Filter} from "../../utils/Enums";

export const ACTION_CREATE = "ADD";
export const ACTION_UPDATE = "UPDATE";
export const ACTION_REMOVE = "REMOVE";
export const ACTION_TOGGLE = "TOGGLE";
export const ACTION_TOGGLE_ALL = "TOGGLE_ALL";
export const ACTION_REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const ACTION_FILTER = "FILTER";

const initialValue = {
  todos: [],
  currentFilter: Filter.all
}

const reducer = (state = initialValue, {type, payload}) => {
  switch (type) {
    case ACTION_CREATE:
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: Date.now(), title: payload, completed: false}
        ]
      };

    case ACTION_UPDATE:
      return {
        ...state,
        todos: state.todos.map(
          item =>
            item.id === payload.id ?
              {...item, title: payload.title} :
              item
        )
      }

    case ACTION_REMOVE:
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => item.id !== payload)
        ]
      }

    case ACTION_TOGGLE:
      return {
        ...state,
        todos: state.todos.map(
          item =>
            item.id === payload ?
              {...item, completed: !item.completed} :
              item
        )
      }

    case ACTION_TOGGLE_ALL:
      return {
        ...state,
        todos: state.todos.map(
          item => {
            return {...item, completed: payload}
          }),
      }

    case ACTION_REMOVE_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => !item.completed)
        ],
        currentFilter: state.currentFilter === Filter.completed ?
          Filter.all : state.currentFilter
      }

    case ACTION_FILTER:
      return {
        ...state,
        currentFilter: payload
      }

    default:
      return state;
  }
}

export default reducer;
