

// Reducer to handle visibilityFilter action
function visibilityFilter(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter
