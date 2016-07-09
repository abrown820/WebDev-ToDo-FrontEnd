
// Reducer to handle ADD and TOGGLE ToDo actions
function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO_SUCCESS':
			return [...state, {
				id: action.id,
				description: action.description,
				completed: false
			}]
		case 'DELETE_TODO_SUCCESS':
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
		case 'TOGGLE_COMPLETE_SUCCESS':
			return state.map((todo, id) => {
				if (id === action.id) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

export default todos
