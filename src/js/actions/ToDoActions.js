import * as types from '../constants/ActionTypes';

let nextToDoID = 0;

export function addToDo(description) {
  return {
    type: types.ADD_TODO,
    id: nextToDoID++,
    description,
    completed: false
  };
}

export function deleteToDo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function toggleToDo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
