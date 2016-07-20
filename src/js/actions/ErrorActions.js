import * as actions from '../actionTypes/ActionTypes'

export function loginBadRequest(){
  return {
    type: actions.LOGIN_BAD_REQUEST
  }
}

export function actionBadPermissions(){
  return {
    type: actions.ACTION_BAD_PERMISSIONS
  }
}

export function refreshErrorState(){
  return {
    type: actions.REFRESH_ERROR_STATE
  }
}
