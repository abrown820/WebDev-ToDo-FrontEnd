const noErrors =
  {
    login: {
  		error: 'NONE',
  	},
  	registration: {
  		error: 'NONE'
  	},
  	tokenValid: true,
  	todoActions:
      {
    		addTodo: {
    			error: 'NONE'
    		},
    		receieveTodos: {
    			error: 'NONE'
    		},
    		updateTodo: {
    			error: 'NONE'
    		},
    		toggleTodo: {
    			error: 'NONE'
    		},
    		deleteTodo: {
    			error: 'NONE'
    		}
    	}
    }

function errors(state = noErrors, action) {
	switch (action.type) {
		case 'REFRESH_ERROR_STATE':
			return state = Object.assign({}, noErrors)

		case 'LOGIN_BAD_REQUEST':
			return Object.assign({}, state,
		{
      login:
            {
  						error: 'LOGIN_BAD_REQUEST',
  						description: 'The username or password supplied was not found'
            }
          })

				case 'ACTION_BAD_PERMISSIONS':
						return Object.assign({}, state,
							state.tokenValid = false
            )

				case 'REQUEST_TODOS_FAILURE':
						return Object.assign({}, state,
							{
                todoActions:
                  {
                    ...state.todoActions,
                    receieveTodos: {
                      error: 'Server did not send todos'
                    }
                }
              }
            )

				case 'ADD_TODO_FAILURE':
						return Object.assign({}, state,
							{
                todoActions:
                  {
                    ...state.todoActions,
                  addTodo: {
								error: 'Server did not register new task'
							}
            }
          })

				case 'TOGGLE_TODO_FAILURE':
						return Object.assign({}, state,
							{
                todoActions:
                {
                  ...state.todoActions,
                  toggleTodo: {
                    error: 'Server did not register toggle'
                  }
                }
              })

				case 'UPDATE_TODO_DESCRIPTION_FAILURE':
						return Object.assign({}, state,
              {
                todoActions:
                {
                  ...state.todoActions,
                  updateTodo: {
                    error: 'Server did not register update'
                  }
                }
              })

				case 'DELETE_TODO_FAILURE':
						return Object.assign({}, state,
              {
                todoActions:
                {
                  ...state.todoActions,
                  deleteTodo: {
                    error: 'Server did not register deletion of task'
                  }
                }
              })
				default:
						return state
			}
	}



	export default errors
