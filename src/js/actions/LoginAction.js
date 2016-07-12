import * as actions from '../actionTypes/ActionTypes'
import * as storage from '../actions/storageCheck'

// handles changing login / register form changes
export function changeForm(username, password){
  return {
    type: actions.CHANGE_FORM,
    username,
    password
  }
}
// helper function to handle errors for all async api calls.
function handleErr(response){
  if (!response.ok){
    console.log(response);
    throw Error(response.statusText);
  }
    return response;
  }

// api call to login
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
    .then(handleErr)
    .then(response => {
      return response.json();
    }).then( (json) => {
      storage.storeToken(json.token),
      console.log(json.token),
      dispatch(loginSuccess());
    })
    .catch(function(error){
      dispatch(loginFailure(error))
      console.log(error)
    })
  }
  }

// local state login update
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

// handles registration api call
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
    .then(() => dispatch(registerSuccess()))
    .then((username, password) => dispatch(asyncLogin(username, password)))
    .catch(function(error){
      dispatch(registerFailure(error))
      console.log(error)
    })
  }
}

// local update to state upon registering
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
