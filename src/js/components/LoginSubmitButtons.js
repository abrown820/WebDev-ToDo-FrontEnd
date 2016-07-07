import React from 'react'

const LoginSubmitButtons = ({onSubmitLogin, onSubmitReg, username, password}) => {
  render(){
    return (
      <div className='form__submit-btn-wrapper'>
        <button className='form__submit-btn' type='submit'
          onClick={onSubmitLogin}
          onSubmitLogin={() => onSubmitLogin(this.props.username, this.props.password)}>
          Login
        </button>

        <button className='form__submit-btn' type='submit'
          onClick={onSubmitReg}
          onSubmitReg={() => onSubmitReg(this.props.username, this.props.password)}>
          Register
        </button>
      </div>
    )
  }
}

export default LoginSubmitButtons
