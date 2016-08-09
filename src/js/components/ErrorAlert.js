import React from 'react'
import ErrorMessage from './ErrorMessage'
import DeleteButton from './DeleteButton'

class ErrorAlert extends React.Component{
  constructor(props){
    super(props)
    this.returnErrors = this.returnErrors.bind(this)
    this.dismissAll = this.dismissAll.bind(this)
  }

returnErrors(errorArray){
  if (errorArray.length > 0){
    return errorArray.map((errorObject) => {
        return <ErrorMessage error={`Error during ${errorObject.error}, ${errorObject.description}`}
          key={errorObject.id} onClick={() => this.props.dismissError(errorObject.id)} />
      })
    }
    else {
        return null
  }
}

dismissAll(){
  if ( this.props.errorList.length > 1){
    return <div>Dismiss all errors: <DeleteButton onClick={() => this.props.dismissAll()} /> </div>
  }
  return null
}

  render() {
let renderedErrors = this.returnErrors(this.props.errorList)
let dismissAll = this.dismissAll()

    return (
        <div className="alert__notification-wrapper">
          {renderedErrors}
          {dismissAll}
        </div>
      )
    }
  }

export default ErrorAlert
