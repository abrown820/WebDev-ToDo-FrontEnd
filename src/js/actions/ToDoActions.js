import * as types from '../actionTypes/ActionTypes';
import * as storage from '../actions/storageCheck';
// Request Todos Actions
export function asyncrequestToDos(){
  return function(dispatch){
    dispatch(requestToDos());
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": storage.checkLogin()
    });

    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/', {method:"GET", headers: myHeaders, mode:'cors'})
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      
      dispatch(requestToDosSuccess(json))
    })
  }
}


export function requestToDos() {
  return {
    type: types.REQUEST_TODOS,
  }
}

export function requestToDosSuccess(todos) {
  
  return {
    type: types.REQUEST_TODOS_SUCCESS,
    todos
  };
}

export function requestToDosFailure(error){
  return {
    type: types.REQUEST_TODOS_FAILURE,
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
    dispatch(addToDo(description, importance));
    var todoContent = {'taskDescription': description,'taskCompleted':false, 'taskImportance': importance}
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": storage.checkLogin()
    })
    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/', {method:"POST", headers: myHeaders, body: JSON.stringify(todoContent),mode:'cors'})
    .then((response)=>{
      return response.json()
    })
    .then((json) => {
      var id = parseInt(json.url.split('/')[4])
      dispatch(addToDoSuccess(id, description, importance))
      }
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

export function addToDoSuccess(id, description,importance){
  return {
    type: types.ADD_TODO_SUCCESS,
    id,
    description,
    importance
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
