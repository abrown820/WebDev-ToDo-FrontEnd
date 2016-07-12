import credentials from './credentials'
import registerStatus from './registerStatus'
import logInStatus from './logInStatus'
import visibilityFilter from './visibilityFilters'
import todos from './todos'

import { combineReducers } from 'redux';

// Combine reducers into root reducer
const toDoAppReducer = combineReducers({
	credentials,
	registerStatus,
	logInStatus,
  visibilityFilter,
  todos
})

export default toDoAppReducer
