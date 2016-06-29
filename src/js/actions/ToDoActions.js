import * as types from '../actionTypes/ActionTypes';

// Request Todos Actions
export function RequestToDos(todos) {
  return {
    type: types.REQUEST_TODOS,
    todos
  }
}

export function RequestToDosSuccess(todos) {
  return {
    types: types.REQUEST_TODOS_SUCCESS,
    todos
  };
}

export function RequestTodosFailure(error){
  return {
    types: types.REQUEST_TODOS_FAILURE,
    error
  }
}

// Add Todo Actions
export function AddToDo(description) {
  return {
    type: types.ADD_TODO_REQUEST,
    description,
    completed: false
  }
}

export function AddToDoSuccess(id){
  return {
    type: types.ADD_TODO_SUCCESS,
    id
  }
}

export function AddToDoFailure(id){
  return {
    type: types.ADD_TODO_FAILURE,
    id
  }
}

// Delete Todo Actions
export function deleteToDo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function deleteToDoSuccess(id) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    id
  };
}

export function deleteToDoFailure(id){
  return {
    type: types.DELETE_TODO_FAILURE,
    id
  };
}

// Toggle Completion of Todo Actions
export function toggleToDo(id, completed) {
  return {
    type: types.TOGGLE_COMPLETE_REQUEST,
    id,
    completed
  };
}

export function toggleToDoSuccess(id, completed) {
  return {
    type: types.TOGGLE_COMPLETE_SUCCESS,
    id,
    completed
  };
}

export function toggleToDoFailure(id, completed) {
  return {
    type: types.TOGGLE_COMPLETE_FAILURE,
    id,
    completed
  };
}

// Visibility Filers
export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
