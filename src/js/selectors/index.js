import { createSelector } from 'reselect'

const getLogInStatus = (state) => state.toDoAppReducer.authentication.logInStatus
const getRegisterStatus = (state) => state.toDoAppReducer.authentication.registerStatus

export const interactingWithServer = createSelector(
  [ getLogInStatus, getRegisterStatus ],
  (logInStatus, registerStatus) => {
    if (logInStatus == 'ATTEMPTING' || registerStatus == 'ATTEMPTING'){
      return true
    }
    else {
      return false
    }
  }
)
