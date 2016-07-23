import React from 'react'

const LoginSubmitButtons = ({
	onSubmitLogin,
	onSubmitReg,
	username,
	password,
	disableFields
}) => {

	return (
		<div className='form__submit-btn-wrapper'>
			<button className='form__submit-btn' type='submit' username={username}
        password={password} onClick={onSubmitLogin}
        onSubmitLogin={() => onSubmitLogin(username, password)}
        disabled={disableFields}>
				Login
			</button>

			<button className='form__submit-btn' type='submit' onClick={onSubmitReg}
        username={username} password={password}
        onSubmitReg={() => onSubmitReg(username, password)}
        disabled={disableFields}>
				Register
			</button>
		</div>
	)
}

export default LoginSubmitButtons
