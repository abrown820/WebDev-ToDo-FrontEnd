import React from 'react'
import ErrorMessage from './ErrorMessage'

class ErrorAlert extends React.Component{
  constructor(props){
    super(props)
    this.findErrors = this.findErrors.bind(this)
  }

  findErrors(errorsArray) {
    const errorReports = []
    errorsArray.filter(function(error){
      if (error != 'NONE'){
        errorReports.push(error)
      }
    })
    return errorReports
  }


  render() {

    const errorReports = this.findErrors(this.props.errorList)

    return (
        <div className="alert__notification-wrapper">
            {errorReports.length > 0 ? errorReports.map(function(value, index){
              return <ErrorMessage immediateError={value} key={index} />
            })
            : null
          }
        </div>
      )
    }
  }

export default ErrorAlert
