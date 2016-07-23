import credentials from './credentials'
import authentication from './authentication'
import visibilityFilter from './visibilityFilters'
import todos from './todos'
import errors from './errors'

import { combineReducers } from 'redux';

// Combine reducers into root reducer
const toDoAppReducer = combineReducers({
	credentials,
	authentication,
	todos,
  visibilityFilter,
	errors
})

export default toDoAppReducer
