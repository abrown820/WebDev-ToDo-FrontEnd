import { connect } from 'react-redux'
import {asyncLogin, asyncRegister, changeForm} from '../actions/LoginAction'
import LoginFieldsAndButtons from '../components/LoginFieldsAndButtons'
import { interactingWithServer } from '../selectors/index.js'


  const mapStateToProps = (state) => {
    return {
      username: state.toDoAppReducer.credentials.username,
      password: state.toDoAppReducer.credentials.password,
      disableFields: interactingWithServer(state)
    }
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
