function logInStatus(state = {loggedIn: false, logInStatus: 'NOT_ATTEMPTED'}, action) {
  switch(action.type) {
    case 'LOGIN':
    return {
      loggedIn: false,
      logInStatus: 'IN_PROCESS'
    }
    case 'LOGIN_SUCCESS':
    return {
      loggedIn: true,
      logInStatus: 'SUCCESFUL'
    }
    case 'LOGIN_FAILURE':
    return {
      loggedIn: false,
      logInStatus: 'FAILED'
    }
    default:
    return state
  }
}

export default logInStatus
