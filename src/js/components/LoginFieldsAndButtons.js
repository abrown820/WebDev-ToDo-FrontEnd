import React from 'react'
import LoginFields from './LoginFields'
import LoginSubmitButtons from './LoginSubmitButtons'
import ErrorNotification from '../containers/ErrorNotification'

class LoginFieldsAndButtons extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {username, password, changeCredentials, onSubmitReg, onSubmitLogin,
    disableFields} = this.props
    return (
      <div>
        <LoginFields username={username} password={password}
          changeCredentials={changeCredentials} />

        <LoginSubmitButtons
          username={username}
          password={password}
          onSubmitLogin={() => onSubmitLogin(username, password)}
          onSubmitReg={() => onSubmitReg(username, password)}
          disableFields={disableFields} />

      </div>
    )
  }
}



export default LoginFieldsAndButtons
