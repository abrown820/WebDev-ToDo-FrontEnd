import React from 'react'
import { connect } from 'react-redux'
import ErrorAlert from '../components/ErrorAlert'

function findErrors(errors) {
  let errorReports = []
  errors.filter(function(error){
    if (error != 'NONE'){
      errorReports.push(error)
    }
  })
  return errorReports
}

const mapStateToProps = ( state ) => {
  const errorArray =
    [
      state.toDoAppReducer.errors.login.error,
      state.toDoAppReducer.errors.registration.error,
      state.toDoAppReducer.errors.todoActions.addTodo.error,
      state.toDoAppReducer.errors.todoActions.receieveTodos.error,
      state.toDoAppReducer.errors.todoActions.updateTodo.error,
      state.toDoAppReducer.errors.todoActions.toggleTodo.error,
      state.toDoAppReducer.errors.todoActions.deleteTodo.error
    ]

  return {
    errorList:  findErrors(errorArray)
  }
}

const ErrorNotification = connect(mapStateToProps)(ErrorAlert)

export default ErrorNotification
