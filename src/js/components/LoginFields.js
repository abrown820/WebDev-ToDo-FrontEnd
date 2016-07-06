import React from 'react'

const login = ({ onSubmitLogin, onSubmitReg, username, password }) => {

  render(){
    return(
    <form className='form'
      onSubmitLogin={() => onSubmitLogin(this.props.username, this.props.password)}
      onSubmitReg={() => onSubmitReg(this.props.username, this.props.password)}
    >

      <div className='form__field-wrapper'>
        <label for='username'> Username </label>
        <input
          className='form__field-input'
          type='text'
          value={this.props.username}
          id='username'
          placeholder=''
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false' />
      </div>

    <div className='form__field-wrapper'>
      <label for='password'> Password </label>
      <input
        className='form__field-input'
        type='text'
        value={this.props.password}
        id='password'
        placeholder=''
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false' />
    </div>

    <div className='form__submit-btn-wrapper'>
      <button className='form__submit-btn' type='submit'
        onClick={onSubmitLogin}>
        Login
      </button>

      <button className='form__submit-btn' type='submit'
        onClick={onSubmitReg}>
        Register
      </button>
    </div>
  </form>
    )
  }
}

export default LoginFields
