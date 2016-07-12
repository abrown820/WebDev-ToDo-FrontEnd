function registerStatus(state = {registering: false, registerSuccess: 'noAttempt'}, action) {
  switch(action.type) {
    case 'REGISTER':
    return {
      registering: true,
      registerSuccess: 'noAttempt'
    }
    case 'REGISTER_SUCCESS':
    return {
      registering: false,
      registerSuccess: true,
    };
    case 'REGISTER_FAILURE':
    return {
      registering: false,
      registerSuccess: false,
    }
    default:
    return state
  }
}

export default registerStatus
