function registerStatus(state = {registering: false, registerSuccess: 'NOT_ATTEMPTED'}, action) {
  switch(action.type) {
    case 'REGISTER':
    return {
      registering: true,
      registerSuccess: 'NOT_ATTEMPTED'
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
