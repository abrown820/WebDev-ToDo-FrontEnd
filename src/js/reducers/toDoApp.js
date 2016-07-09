import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actionTypes/ActionTypes.js'
import { combineReducers } from 'redux';
const {SHOW_ALL} = VisibilityFilters;

// Reducer to handle visibilityFilter action
function visibilityFilter(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}
// Reducer to handle ADD and TOGGLE ToDo actions
function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, {
				id: action.id,
				description: action.description,
				importance: action.importance,
				completed: false
			}]
		case 'DELETE_TODO':
			return [
				...state.slice(0, action.id),
				...state.slice(action.id + 1)
			]
		case 'TOGGLE_COMPLETE':
			return state.map((todo, id) => {
				if (todo.id === action.id) {
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

// Combine reducers into root reducer
const toDoApp = combineReducers({
  visibilityFilter,
  todos
})

export default toDoApp
