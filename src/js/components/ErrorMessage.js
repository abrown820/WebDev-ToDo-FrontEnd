import React from 'react'

const ErrorMessage = ({ immediateError, index }) => (

   <div className='alert alert-danger' role='alert' key={index}
      immediateError={immediateError} >
     {immediateError}
    </div>
)

export default ErrorMessage
