import React from 'react'
import { connect } from 'react-redux'
import { asyncaddToDo } from '../actions/ToDoActions'

let AddToDo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="task-form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(asyncaddToDo(input.value, parseInt(document.getElementById('importanceSelect').value)))
        input.value = ''
      }}>
      
        <input className="task-input" ref={node => {
          input = node
        }} />
        <select className="task-select" id='importanceSelect'>
          <option value='1'>Normal</option>
          <option value='2'>Important</option>
          <option value='3'>Very Important</option>
        </select>
        <button className="task-submit" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddToDo = connect()(AddToDo)

export default AddToDo;
