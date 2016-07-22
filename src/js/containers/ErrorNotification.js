import React from 'react'
import { connect } from 'react-redux'
import ErrorAlert from '../components/ErrorAlert'
import refreshErrorState from '../actions/ErrorActions'



const mapStateToProps = ( state ) => {
  return {
    errorList: [
        state.toDoAppReducer.errors.login.error,
        state.toDoAppReducer.errors.registration.error,
        state.toDoAppReducer.errors.todoActions.addTodo.error,
        state.toDoAppReducer.errors.todoActions.receieveTodos.error,
        state.toDoAppReducer.errors.todoActions.updateTodo.error,
        state.toDoAppReducer.errors.todoActions.toggleTodo.error,
        state.toDoAppReducer.errors.todoActions.deleteTodo.error
      ]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => {dispatch(refreshErrorState())}
  }
}

const ErrorNotification = connect(mapStateToProps)(ErrorAlert)

export default ErrorNotification
