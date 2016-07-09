import * as actions from '../actionTypes/ActionTypes'

export function changeForm(username, password){
  return {
    type: actions.CHANGE_FORM,
    username,
    password
  }
}

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

export function loginFailure(err){
  return {
    type: actions.LOGIN_FAILURE,
    err
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
