
// Reducer to handle ADD and TOGGLE ToDo actions
function todos(state = [], action) {

	switch (action.type) {
		case 'ADD_TODO_REQUEST':
			return [...state, {
				id: 0,
				taskID: action.taskid,
				description: action.description,
				importance: action.importance,
				status: { completed: false }
			}]

		case 'ADD_TODO_SUCCESS':
			return state.map((todo) => {

				if(todo.taskID === action.taskid && todo.taskID){
					
					return Object.assign({}, todo, {
						id: action.id
					})
				}
				return todo
			})
			
		case 'ADD_TODO_FAILURE':
			return state.map((todo)=>{
				if(todo.taskID === action.taskid && todo.taskID){
				
				}
				return todo
			})

// Updating a ToDo Description
		case 'UPDATE_TODO_DESCRIPTION_REQUEST':
		return state.map((todo, id) => {
			if (todo.id === action.id) {
				return Object.assign({}, todo, {
					description: action.newDescription,
					status: { ...todo.status, updatingDescription: true }
				})
			}
			return todo
		})

		case 'UPDATE_TODO_DESCRIPTION_SUCCESS':
		return state.map((todo, id) => {
			if (todo.id === action.id) {
				return Object.assign({}, todo, {
					status: { ...todo.status, updatingDescription: false }
				})
			}
		return todo
		})

		case 'UPDATE_TODO_DESCRIPTION_FAILURE':
		return state.map((todo, id) => {
			if (todo.id === action.id){
				return Object.assign({}, todo, {
					status: { ...todo.status, updatingDescription: 'FAILED' }
				}
			)}
			return todo
		})

		case 'DELETE_TODO_REQUEST':
		return state.map((todo, id) => {
			if (todo.id === action.id){
				return Object.assign({}, todo, {
					status: { ...todo.status, deletingTodo: true }
				}
			)}
			return todo
		})

		case 'DELETE_TODO_SUCCESS':
			var idLocation =0
			state.map((task, index)=>{
				if(task.id == action.id){
					idLocation = index
				}
			})
			return state.slice(0, idLocation).concat(state.slice(idLocation+1))

			case 'DELETE_TODO_FAILURE':
			return state.map((todo, id) => {
				if (todo.id === action.id){
					return Object.assign({}, todo, {
						status: { ...todo.status, deletingTodo: false }
					}
				)}
				return todo
			})

		case 'TOGGLE_COMPLETE_REQUEST':
			return state.map((todo, id) => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						status: { ...todo.status, completed: !todo.status.completed }
					})
				}
				return todo
			})

		case 'TOGGLE_COMPLETE_FAILURE':
			return state.map((todo, id) => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						status: { ...todo.status, completed: !todo.status.completed }
					})
				}
			})

		case 'REQUEST_TODOS_SUCCESS':
			return state.concat(action.todos.map((todo)=>{
				return {
					id: parseInt(todo.url.split('/')[4]),
					taskID: todo.taskID,
					description: todo.taskDescription,
					importance: todo.taskImportance,
					status: { completed: todo.taskCompleted }
				}
			}))
		default:
			return state
	}
}

export default todos
