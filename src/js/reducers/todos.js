
// Reducer to handle ADD and TOGGLE ToDo actions
function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO_SUCCESS':
			return [...state, {
				id: action.id,
				description: action.description,
				importance: action.importance,
				completed: false
			}]
		case 'DELETE_TODO_SUCCESS':
			var idLocation =0
			state.map((task, index)=>{
				if(task.id == action.id){
					idLocation = index
				}
			})	
			return state.slice(0, idLocation).concat(state.slice(idLocation+1))
		case 'TOGGLE_COMPLETE_SUCCESS':
			return state.map((todo, id) => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		case 'REQUEST_TODOS_SUCCESS':
			
			return state.concat(action.todos.map((todo)=>{
				return {
					id: parseInt(todo.url.split('/')[4]),
					description: todo.taskDescription,
					importance: todo.taskImportance,
					completed: todo.taskCompleted
				}
			}))
		default:
			return state
	}
}

export default todos
