function logInStatus(state = {loggedIn: false, loggingIn: false}, action) {
  switch(action.type) {
    case 'LOGIN':
    return {
      loggedIn: false,
      loggingIn: true
    }
    case 'LOGIN_SUCCESS':
    return {
      loggedIn: true,
      loggingIn: false
    };
    case 'LOGIN_FAIL':
    return {
      loggedIn: false,
      loggingIn: false
    }
    default:
    return state
  }
}

export default logInStatus
