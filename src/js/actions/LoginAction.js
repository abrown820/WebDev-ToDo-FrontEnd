import * as actions from '../actionTypes/actions'

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
