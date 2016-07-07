import * from '../actionTypes/ActionTypes.js'
import { combineReducers } from 'redux';
const {SHOW_ALL} = VisibilityFilters;


// Reducer to handle username and password
function credentials(state = [], action) {
	switch (action.type) {
		case 'CHANGE_FORM':
		return [...state, {
			account: {
				username: action.username,
				password: action.password
			}
		}];
		default:
		return state
	}
}
// Reducer to handle visibilityFilter action
function visibilityFilter(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}
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

// Combine reducers into root reducer
const toDoAppReducer = combineReducers({
	credentials,
  visibilityFilter,
  todos
})

export default toDoAppReducer
