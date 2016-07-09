import React, { PropTypes } from 'react'
import LoginFields from './LoginFields'
import LoginSubmitButtons from './LoginSubmitButtons'

class LoginPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    const {username, password, changeCredentials, onSubmitReg, onSubmitLogin} = this.props
    console.log(changeCredentials);
    return (
      <div>
        <LoginFields username={username} password={password}
          changeCredentials={changeCredentials} />

        <LoginSubmitButtons
          username={username}
          password={password}
          onSubmitLogin={() => onSubmitLogin(username, password)}
          onSubmitReg={() => onSubmitReg(username, password)} />
      </div>
    )
  }
}



export default LoginPage
