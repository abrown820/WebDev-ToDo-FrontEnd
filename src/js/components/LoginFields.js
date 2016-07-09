import React from 'react'

class LoginFields extends React.Component {
  constructor(props) {
  super(props)
  this._changeUsername = this._changeUsername.bind(this)
  this._changePassword = this._changePassword.bind(this)
  this._changeCredentials = this._changeCredentials.bind(this)
}



_changeUsername(event) {
  this._changeCredentials({username: event.target.value, password: password})
}

_changePassword(event){
  this._changeCredentials({username: username, password: event.target.value})
}

_changeCredentials(newCredentials){

    this.props.changeCredentials(newCredentials.username, newCredentials.password)
}

render() {
  const {username, password} = this.props
  return(

    <form className='form'
      onChangeUsername={() => this._changeUsername(event)}
      onChangePassword={() => this._changePassword(event)}
      username={username}
      password={password}
    >

      <div className='form__field-wrapper'>
        <label for='username'> Username </label>
        <input
          className='form__field-input'
          type='text'
          onChange={this._changeUsername}
          value={username}
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
        onChange={this._changePassword}
        value={password}
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
