import React from 'react';
import DeleteTodo from './DeleteTodo';
import MarkComplete from './MarkComplete'
import importanceColour from '../actions/importance'

const Todo = ({description, onMarkComplete, onDeleteTodo, completed, id, importance}) => (
<div className="task" style={{'backgroundColor': importanceColour(id, importance)}}>
  <span style={{'textDecoration': completed ? 'line-through' : 'none'}}>
  	{console.log(importance)}
    {description}

  
  </span>
  <div className="buttons">
      <MarkComplete onClick={onMarkComplete} completed={completed}/>
      <DeleteTodo onClick={onDeleteTodo}/>
  </div>
</div>
)

export default Todo
