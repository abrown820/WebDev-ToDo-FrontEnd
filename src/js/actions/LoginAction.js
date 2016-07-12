import * as actions from '../actionTypes/ActionTypes'
import moment from 'moment';


export function changeForm(username, password){
  return {
    type: actions.CHANGE_FORM,
    username,
    password
  }
}

function handleErr(response){
  if (!response.ok){
    console.log(response);
    throw Error(response.statusText);
  }
    return response;
  }

export function asyncLogin(username, password){
  return function(dispatch) {
    dispatch(login(username, password))
    const loginInfo = {'username': username, 'password': password}
    fetch('https://daniel-todo-backend.herokuapp.com/api-token-auth/',
    {method:'GET',
     dataType: 'json',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: loginInfo,
      mode:'no-cors'
    })
    .then(handleErr)
    .then(response => console.log(response))
    .catch(function(error){
      dispatch(loginFailure(error))
      console.log(error)
    })
  }
  }

// export function asyncaddToDo(description, importance) {
//   return function (dispatch) {
//     dispatch(addToDo(description, importance))
//     var headers = new Headers();
//     headers.append("Authorization", checkLogin)
//     var todoContent = {'taskDescription': description,'taskComplete':false, 'taskImportance': importance}
//     return fetch('https://daniel-todo-backend.herokuapp.com/tasks/', {method:"POST", headers: headers, body: todoContent,mode:'no-cors'})
//     .then(response => response.json())
//     .then(json =>
//       dispatch()
//     )
//   }


export function login(username, password){
  return {
    type: actions.LOGIN,
    username,
    password
  }
}

export function loginSuccess(){
  return {
    type: actions.LOGIN_SUCCESS
  }
}

export function loginFailure(error){
  return {
    type: actions.LOGIN_FAIL,
    error
  }
}

export function asyncRegister(username, password){
  return function(dispatch){
    dispatch(register());
    const regInfo = { "password": password,
    "is_superuser": false,
    "username": username,
    "first_name": "",
    "last_name": "",
    "email": "",
    "is_staff": false,
    "is_active": true,
    "groups": []};
    fetch('https://daniel-todo-backend.herokuapp.com/users/',
    {method:'POST',
     dataType: 'json',
      body: regInfo,
      mode:'no-cors'
    })
    .then(handleErr)
    .then(response => console.log(response))
    .catch(function(error){
      dispatch(registerFailure(error))
      console.log(error)
    })
  }
}

export function register(){
  return {
    type: actions.REGISTER,
  }
}

export function registerSuccess(){
  return {
    type: actions.REGISTER_SUCCESS,
  }
}

export function registerFailure(){
  return {
    type: actions.REGISTER_FAILURE,
  }
}
