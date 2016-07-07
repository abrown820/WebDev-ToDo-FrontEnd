import React from 'react'
import { connect } from 'react-redux'
import {login, register} from '../actions/LoginAction'
import LoginPage from '../components/LoginPage'

  const mapStateToProps = (state) => {
    username: state.account.username,
    password: state.account.password
  }

  const mapDispatchToProps = (dispatch, ownProps) =>{
    onSubmitLogin: (this.ownProps.username, this.ownProps.password) => {
      dispatch(login(this.ownProps.username, this.ownProps.password))
    },
    onSubmitReg: (state.username, state.password) => {
      dispatch(register(state.username, state.password))
    },
    onChangeUsername: (this.props.username, this.props.password) => {
      dispatch(changeUsername())
    }
  }

}

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginForm
