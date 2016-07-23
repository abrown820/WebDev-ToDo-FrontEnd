import React from 'react'
import DeleteButton from './DeleteButton'

const ErrorMessage = ({ error, onClick }) => (

   <div className='alert alert-danger' role='alert'>
     {error}
     <DeleteButton onClick={onClick} />
    </div>

)

export default ErrorMessage
