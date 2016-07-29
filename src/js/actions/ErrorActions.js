import * as actions from '../actionTypes/ActionTypes'

let errorId = 0

export function newError(id, errorAction, description){
 
  return {
    type: actions.NEW_ERROR,
    id,
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

export function newErrorWithTimeout(errorAction, description){ 
  let id = errorId++

  return (dispatch) => {
    
    dispatch(newError(id, errorAction, description))
    
    setTimeout(() => {
      dispatch(dismissError(id))
    }, 5000)

  }
}

  export function dismissAllErrors(){
    return {
      type: actions.DISMISS_ALL_ERRORS
    }
  }
