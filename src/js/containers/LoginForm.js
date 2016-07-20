import React from 'react'
import { connect } from 'react-redux'
import {asyncLogin, asyncRegister, changeForm} from '../actions/LoginAction'
import LoginPage from '../components/LoginPage'

  const mapStateToProps = (state) => {

    return {
    username: state.toDoAppReducer.credentials.account.username,
    password: state.toDoAppReducer.credentials.account.password,
    registerState: state.toDoAppReducer.registerStatus.registrationStatus,
    logInState: state.toDoAppReducer.logInStatus.logInStatus,
    logInError: state.toDoAppReducer.errors.login
    };
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      onSubmitLogin: (username, password) => {
        dispatch(asyncLogin(username, password))
      },
      onSubmitReg: (username, password) => {
        dispatch(asyncRegister(username, password))
      },
      changeCredentials: (username, password) => {
        dispatch(changeForm(username, password))
      }
    }
  }

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginForm
