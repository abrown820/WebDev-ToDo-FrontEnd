import React from 'react'

const ErrorMessage = ( immediateError, key ) => {


   <div className='alert alert-danger' role='alert' key={key} immediateError={immediateError}>
     {immediateError}
    </div>

}

export default ErrorMessage
