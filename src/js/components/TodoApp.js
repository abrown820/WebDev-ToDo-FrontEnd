import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddToDo.js'
import VisibleToDoList from '../containers/VisibleToDoList'

const TodoApp = () => (
  <div>
      <AddToDo />
      <VisibleToDoList />
      <Footer />
  </div>
)

export default TodoApp
