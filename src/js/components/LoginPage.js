import React, { PropTypes } from 'react'
import LoginFields from './LoginFields'
import LoginSubmitButtons from './LoginSubmitButtons'

class LoginPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {username, password, changeCredentials, onSubmitReg, onSubmitLogin,
    registerState, loginState} = this.props
    return (
      <div>
        <LoginFields username={username} password={password}
          changeCredentials={changeCredentials} />

        <LoginSubmitButtons
          username={username}
          password={password}
          onSubmitLogin={() => onSubmitLogin(username, password)}
          onSubmitReg={() => onSubmitReg(username, password)}
          registerState={registerState}
          loginState={loginState} />
      </div>
    )
  }
}



export default LoginPage
