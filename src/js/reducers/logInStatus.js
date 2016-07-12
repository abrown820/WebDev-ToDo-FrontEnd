function logInStatus(state = {loggedIn: false, loggingIn: false}, action) {
  switch(action.type) {
    case 'LOGIN':
    return {
      loggingIn: true,
      loginSuccess: 'IN_PROCESS'
    }
    case 'LOGIN_SUCCESS':
    return {
      loggingIn: false,
      loginSuccess: 'SUCCESFUL'
    };
    case 'LOGIN_FAILURE':
    return {
      loggingIn: false,
      loginSuccess: 'FAILED'
    }
    default:
    return state
  }
}

export default logInStatus
