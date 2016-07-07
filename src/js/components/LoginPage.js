import React from 'react'
import LoginFields from './LoginFields'
import LoginSubmitButtons from './LoginSubmitButtons'

class LoginPage extends React.Component{
  render(){
    const {username, password, onSubmitReg, onSubmitLogin} = this.props
    return (
      <div>
        <LoginFields username={username} password={password} />
        
        <LoginSubmitButtons
          onSubmitLogin={() => onSubmitLogin(state.username, state.password)}
          onSubmitReg={() => onSubmitReg(state.username, state.password)} />
      </div>
    )
  }
}
