import * as types from '../actionTypes/ActionTypes';

// Request Todos Actions
export function requestToDos() {
  return {
    type: types.REQUEST_TODOS,
  }
}

export function requestToDosSuccess(todos) {
  return {
    types: types.REQUEST_TODOS_SUCCESS,
    todos
  };
}

export function requestTodosFailure(error){
  return {
    types: types.REQUEST_TODOS_FAILURE,
    error
  }
}

export function receiveTodos(todos) {
  return {
    type: types.RECEIVE_TODOS,
    todos
  }
}

export function asyncaddToDo(description, importance) {
  return function (dispatch) {
    var todoContent = {'taskDescription': description,'taskComplete':false, 'taskImportance': importance}
    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/', {method:"POST", headers: headers, body: todoContent,mode:'no-cors'})
    .then(response => response.json())
    .then(json =>
      dispatch()
    )
  }
}

// Add Todo Actions
export function addToDo(description, importance) {
  return {
    type: types.ADD_TODO_REQUEST,
    description,
    importance,
    completed: false
  }
}

export function addToDoSuccess(id){
  return {
    type: types.ADD_TODO_SUCCESS,
    id
  }
}

export function addToDoFailure(id){
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
