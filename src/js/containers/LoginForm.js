import React from 'react'
import { connect } from 'react-redux'
import {asyncLogin, asyncRegister, changeForm} from '../actions/LoginAction'
import LoginFieldsAndButtons from '../components/LoginFieldsAndButtons'

  const mapStateToProps = (state) => {

  const logInStatus = state.toDoAppReducer.authentication.logInStatus
  const registerStatus = state.toDoAppReducer.authentication.registerStatus

  function disableFields(logInStatus, registerStatus){
    if (logInStatus == 'ATTEMPTING' || registerStatus == 'ATTEMPTING'){
      return true
    }
    else {
      return false
    }
  }

    return {
    username: state.toDoAppReducer.credentials.username,
    password: state.toDoAppReducer.credentials.password,
    disableFields: disableFields(logInStatus, registerStatus)
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

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFieldsAndButtons)

export default LoginForm
