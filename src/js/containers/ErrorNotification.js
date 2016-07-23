import React from 'react'
import { dismissAllErrors, dismissError} from '../actions/ErrorActions'
import { connect } from 'react-redux'
import ErrorAlert from '../components/ErrorAlert'
import refreshErrorState from '../actions/ErrorActions'



const mapStateToProps = ( state ) => {
  return {
    errorList: state.toDoAppReducer.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dismissAll: () => {
      dispatch(dismissAllErrors())
    },
    dismissError: (id) => {
      dispatch(dismissError(id))
    }
  }
}

const ErrorNotification = connect(mapStateToProps, mapDispatchToProps)(ErrorAlert)

export default ErrorNotification
