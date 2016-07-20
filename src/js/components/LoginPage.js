import React from 'react'
import LoginForm from '../containers/LoginForm'
import ErrorNotification from '../containers/ErrorNotification'

const LoginPage = () => (
  <div>
    <LoginForm />
    <ErrorNotification />
  </div>
)

export default LoginPage
