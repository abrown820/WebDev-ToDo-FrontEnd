// Reducer to handle username and password
function credentials(state = {username:'', password: ''}, action) {
	switch (action.type) {
		case 'CHANGE_FORM':
		return {
				username: action.username,
				password: action.password
		};
		default:
		return state
	}
}

export default credentials
