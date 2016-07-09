import credentials from './credentials'
import todos from './todos'
import visibilityFilter from './visibilityFilters'
import { combineReducers } from 'redux';

// Combine reducers into root reducer
const toDoAppReducer = combineReducers({
	credentials,
  visibilityFilter,
  todos
})

export default toDoAppReducer
