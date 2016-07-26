import * as types from '../actionTypes/ActionTypes';
import * as storage from '../actions/storageCheck';
import { actionBadPermissions, newErrorWithTimeout } from './ErrorActions'

// helper function to handle errors for all async api calls.
function handleErr(response){
  if (!response.ok){
    console.log(response);
    throw Error(response.status);
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
    .then(handleErr)
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      dispatch(requestToDosSuccess(json))
    })
    .catch(function(error){
      if (error.message == 401){
        dispatch(newErrorWithTimeout('request todos', 'your access token has expired - please log in again.'))
      }
      dispatch(requestToDosFailure())
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
  var taskid = 'xxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
  return function (dispatch) {
    dispatch(addToDoRequest(description, importance, taskid));
    var todoContent = {'taskDescription': description,'taskCompleted':false, 'taskImportance': importance, taskID: taskid}
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Authorization": storage.checkLogin()
    })
    return fetch('https://daniel-todo-backend.herokuapp.com/tasks/', {method:"POST", headers: myHeaders, body: JSON.stringify(todoContent),mode:'cors'})
    .then(handleErr)
    .then((response)=>{
      return response.json();
    })
    .then((json) => {
      var id = parseInt(json.url.split('/')[4]);
      var taskid = json.taskID;
      dispatch(addToDoSuccess(id, taskid,description, importance))
      })
    .catch(function(error){
      if (error.message == 401){
        dispatch(actionBadPermissions())
        dispatch(newErrorWithTimeout('add todo', 'your token has expired, please log in again.'))
        dispatch(push('/todo'))
      }
      dispatch(addToDoFailure(taskid))
      dispatch(newErrorWithTimeout('add todo', `your task "${description}" failed to send`))
    })
    
    
  }
}

// Add Todo Actions
export function addToDoRequest(description, importance, taskid) {
  return {
    type: types.ADD_TODO_REQUEST,
    description,
    importance,
    taskid,
    completed: false
  }
}

export function addToDoSuccess(id, taskid, description,importance){
  
  return {
    type: types.ADD_TODO_SUCCESS,
    id,
    taskid,
    description,
    importance
  }
}

export function addToDoFailure(taskid){
  return {
    type: types.ADD_TODO_FAILURE,
    taskid
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
    .then(handleErr)
    .then((response)=>{
      dispatch(deleteToDoSuccess(id));
    })
    .catch(function(error){
      dispatch(deleteToDoFailure(id))
      dispatch(newErrorWithTimeout('delete todo', 'failed to delete your task on the server.'))
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
      dispatch(newErrorWithTimeout('toggle todo', 'failed to send completion of task to server'))
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
        dispatch(newErrorWithTimeout('updating task description', 'the server did not register the update description'))
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
