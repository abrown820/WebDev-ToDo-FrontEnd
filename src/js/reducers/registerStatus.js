function registerStatus(state = {registered: false, registrationStatus: 'NOT_ATTEMPTED'}, action) {
  switch(action.type) {
    case 'REGISTER':
    return {
      registered: false,
      registrationStatus: 'IN_PROCESS'
    }
    case 'REGISTER_SUCCESS':
    return {
      registered: true,
      registrationStatus: 'SUCCESSFUL'
    };
    case 'REGISTER_FAILURE':
    return {
      registered: false,
      registrationStatus: 'FAILED'
    }
    default:
    return state
  }
}

export default registerStatus
