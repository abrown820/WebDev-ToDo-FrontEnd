function authentication(state = {logInStatus: false, registerStatus: false}, action) {

  switch(action.type) {

    case 'LOGIN':
    return {
        ...state,
      logInStatus: 'ATTEMPTING'
    }

    case 'LOGIN_SUCCESS':
    return {
      ...state,
      logInStatus: 'LOGGED_IN'
    }

    case 'LOGIN_FAILURE':
    return {
      ...state,
      logInStatus: 'FAILED'
    }

    case 'REGISTER':
    return {
      ...state,
      registerStatus: 'ATTEMPTING'
    }

    case 'REGISTER_SUCCESS':
    return {
      ...state,
      registerStatus: 'REGISTERED'
    }

    case 'REGISTER_FAILURE':
    return {
      ...state,
      registerStatus: 'FAILED'
    }

    default:
      return state
  }
}

export default authentication
