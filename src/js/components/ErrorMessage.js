import React from 'react'

const ErrorMessage = ({ immediateError }) => (

   <div className='alert alert-danger' role='alert'>
     {immediateError}
    </div>
)

export default ErrorMessage
