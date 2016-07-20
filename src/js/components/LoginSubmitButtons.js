import React from 'react'

const LoginSubmitButtons = ({
	onSubmitLogin,
	onSubmitReg,
	username,
	password,
  registerState,
  logInState
}) => {

	return (
		<div className='form__submit-btn-wrapper'>
			<button className='form__submit-btn' type='submit' username={username}
        password={password} onClick={onSubmitLogin}
        onSubmitLogin={() => onSubmitLogin(username, password)}
        disabled={logInState.loginStatus == 'IN_PROCESS' || registerState == 'IN_PROCESS' ? true : false}>
				Login
			</button>

			<button className='form__submit-btn' type='submit' onClick={onSubmitReg}
        username={username} password={password}
        onSubmitReg={() => onSubmitReg(username, password)}
        disabled={logInState.loginStatus == 'IN_PROCESS' || registerState == 'IN_PROCESS' ? true : false}>
				Register
			</button>
		</div>
	)
}

export default LoginSubmitButtons
