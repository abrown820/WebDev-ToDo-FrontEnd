import React from 'react'

const login = ({ onChangeUsername, onChangePassword }) => {

  render(){
    return(
    <form className='form'
      onChangeUsername={() => changeUsername(this.props.account.username, this.props.account.password)}
      onChangePassword={() => changePassword(this.props.account.username, this.props.account.password)}
    >

      <div className='form__field-wrapper'>
        <label for='username'> Username </label>
        <input
          className='form__field-input'
          type='text'
          onChange={onChangeUsername}
          value={this.props.account.username}
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
        onChange={onChangePassword}
        value={this.props.account.password}
        id='password'
        placeholder=''
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false' />
    </div>
  </form>
    )
  }
}

export default LoginFields
