function errors(state = [], action) {

  switch (action.type) {

    case 'NEW_ERROR':
    return [...state, {
        id: action.id,
        error: action.errorAction,
        description: action.description,
      }]


    case 'DISMISS_ERROR':
      let errorIndex = 0
      state.map((error, index) => {
        if (error.id == action.id){
          errorIndex = index
        }
      })
        return [...state.slice(0, errorIndex), ...state.slice(errorIndex + 1)]

      case 'DISMISS_ALL_ERRORS':
      return state = []

      default:
        return state
    }
  }

export default errors
