import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddToDo.js'
import VisibleToDoList from '../containers/VisibleToDoList'
import ErrorNotification from '../containers/ErrorNotification'

const TodoApp = () => (
  <div>
      <AddToDo />
      <VisibleToDoList />
      <Footer />
      <ErrorNotification />
  </div>
)

export default TodoApp
