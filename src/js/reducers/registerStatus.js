function registerStatus(state = {registering: false, registerSuccess: 'NOT_ATTEMPTED'}, action) {
  switch(action.type) {
    case 'REGISTER':
    return {
      registering: true,
      registerSuccess: 'IN_PROCESS'
    }
    case 'REGISTER_SUCCESS':
    return {
      registering: false,
      registerSuccess: 'SUCCESFUL',
    };
    case 'REGISTER_FAILURE':
    return {
      registering: false,
      registerSuccess: 'FAILED',
    }
    default:
    return state
  }
}

export default registerStatus
