import React from 'react'
import { connect } from 'react-redux'
import {login, register} from '../actions/LoginAction'
import LoginPage from '../components/LoginPage'

  const mapStateToProps = (state) => {
    username: state.account.username,
    password: state.account.password
  }

  const mapDispatchToProps = (dispatch) =>{
    onSubmitLogin: (username, password) => {
      dispatch(login(username, password))
    },
    onSubmitReg: (username, password) => {
      dispatch(register(username, password))
    },
    changeCredentials: (username, password) => {
      dispatch(changeForm(username, password))
    }
  }

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginForm
