function logInStatus(state = {loggedIn: false, loginStatus 'NOT_ATTEMPTED'}, action) {
  switch(action.type) {
    case 'LOGIN':
    return {
      loggedIn: false,
      loginStatus: 'IN_PROCESS'
    }
    case 'LOGIN_SUCCESS':
    return {
      loggedIn: true,
      loginStatus: 'SUCCESFUL'
    };
    case 'LOGIN_FAILURE':
    return {
      loggedIn: false,
      loginStatus: 'FAILED'
    }
    default:
    return state
  }
}

export default logInStatus
