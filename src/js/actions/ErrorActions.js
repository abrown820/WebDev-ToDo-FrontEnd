import * as actions from '../actionTypes/ActionTypes'

let errorId = 1

export function newError(errorAction, description){
  return {
    type: actions.NEW_ERROR,
    id: errorId++,
    errorAction,
    description
  }
}

export function dismissError(id){
  return {
    type: actions.DISMISS_ERROR,
    id
  }
}

export function dismissAllErrors(){
  return {
    type: actions.DISSMIS_ALL_ERRORS
  }
}
