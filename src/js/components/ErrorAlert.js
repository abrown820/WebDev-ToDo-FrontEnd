import React from 'react'
import ErrorMessage from './ErrorMessage'

class ErrorAlert extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const errorList = this.props;

    return (
        <div>
          {errorList.length > 0 ? errorList.map(function(value, index){
            return
              <ErrorMessage immediateError={value} key={index}/>
            })
          : null}
       </div>
      )
    }
  }

export default ErrorAlert
