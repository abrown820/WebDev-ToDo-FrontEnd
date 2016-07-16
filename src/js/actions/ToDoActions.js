import * as types from '../actionTypes/ActionTypes';
import * as storage from '../actions/storageCheck';

// helper function to handle errors for all async api calls.
function handleErr(response){
  if (!response.ok){
    throw Error(response.statusText);
  }
    return response;
  }

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

export function asyncdeleteToDo(id){
  return function(dispatch) {
    dispatch(deleteToDo(id));
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": storage.checkLogin()
    })
    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/'+id+'/', {method:"DELETE", headers: myHeaders,mode:'cors'})
    .then((response)=>{
      dispatch(deleteToDoSuccess(id));
    })
  }
}

// Delete Todo Actions
export function deleteToDo(id) {
  return {
    type: types.DELETE_TODO_REQUEST,
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
// Toggle todos
export function asynctoggleToDo(id, completed){
  return function(dispatch){
    dispatch(toggleToDo(id, completed));
    var todoContent = {'taskCompleted':completed}
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": storage.checkLogin()
    })
    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/'+id+'/', {method:"PATCH", headers: myHeaders, body: JSON.stringify(todoContent),mode:'cors'})
    .then(handleErr)
    .then((response)=>{
      dispatch(toggleToDoSuccess(id));
    })
    .catch(function(error){
      dispatch(toggleToDoFailure(id))
    })
  }
}

// Toggle Completion of Todo Actions
export function toggleToDo(id, completed) {
  return {
    type: types.TOGGLE_COMPLETE_REQUEST,
    id,
    completed
  };
}

// Doesn't need to actually toggle as the initial Request will do so,
// only needs to alert failure in which case toggle is undone
export function toggleToDoSuccess(id, completed) {
  return {
    type: types.TOGGLE_COMPLETE_SUCCESS,
    id
  };
}

export function toggleToDoFailure(id) {
  return {
    type: types.TOGGLE_COMPLETE_FAILURE,
    id
  };
}

export function asyncUpdateTodoDescription(id, newDescription) {
	return function(dispatch) {
		var taskDescription = {
			'taskDescription': newDescription
		}
		const myHeaders = new Headers({
			"Content-Type": "application/json",
			"Authorization": storage.checkLogin()
		})
		return fetch('https://daniel-todo-backend.herokuapp.com/tasks/' + id + '/', {
				method: "PATCH",
				headers: myHeaders,
				body: JSON.stringify(taskDescription),
				mode: 'cors'
			})
			.then(handleErr)
			.then(() => {
        dispatch(updateTodoDescriptionSuccess(id, newDescription))
      })
			.catch(function(error) {
				dispatch(updateTodoDescriptionFailure(id))
        dispatch(asyncrequestToDos())
			})
	}
}

export function updateTodoDescription(id, newDescription){
  return {
    type: types.UPDATE_TODO_DESCRIPTION_REQUEST,
    id,
    newDescription
  };
}

export function updateTodoDescriptionSuccess(id){
  return {
    type: types.UPDATE_TODO_DESCRIPTION_SUCCESS,
    id
  }
}

export function updateTodoDescriptionFailure(id){
  return {
    type: types.UPDATE_TODO_DESCRIPTION_FAILURE,
    id
  }
}

// Visibility Filers
export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
