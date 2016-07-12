import * as actions from '../actionTypes/ActionTypes'
import * as storage from '../actions/storageCheck'

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
    {method:'POST',
     dataType: 'json',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(loginInfo),
      mode:'cors'
    })    
    .then(response => {
      return response.json();
    }).then( (json) => {
      storage.storeToken(json.token);
      dispatch(loginSuccess());
    })
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
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    })
    const regInfo =
    {"password": password,
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
     dataType: 'application/json',
     headers: myHeaders,
      body: JSON.stringify(regInfo),
      mode:'cors'
    })
    .then(handleErr)
    .then(() => dispatch(registerSuccess())
    .then((username, password) => asyncLogin(username, password))
    .catch(function(error){
      dispatch(registerFailure(error))
      console.log(error)
    })
  }
}

export function register(username, password){
  return {
    type: actions.REGISTER,
    username,
    password
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
