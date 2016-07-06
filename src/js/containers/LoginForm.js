import React from 'react'
import { connect } from 'react-redux'
import login from '../actions/LoginAction'

class LoginForm extends React.Component{
  constructor(props){
    super (props)

    this.onSubmitLogin = this.onSubmitLogin.bind(this)
    this.onSubmitReg = this.onSubmitReg.bind(this)
  }
}

render(){
  return(
  <form className='form' onSubmitLogin={this.onSubmitLogin} onSubmitReg={this.onSubmitReg}>
    <label for='username'> Username </label>
    <input
      className='form__field-input'
      type='text'
      value={this.props.password}
      id='username'
      placeholder=''
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false' />

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

      
  )
}

onSubmitLogin(this.props.username, this.props.password)

LoginForm = connect()(Login)

export default LoginForm
