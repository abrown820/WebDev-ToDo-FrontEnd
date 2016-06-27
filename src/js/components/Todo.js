import React from 'react';
import DeleteTodo from './DeleteTodo';
import MarkComplete from './MarkComplete'

const Todo = ({description, onMarkComplete, onDeleteTodo, completed}) => (
<div>
  <span style={{'textDecoration': completed ? 'line-through' : 'none'}}>
    {description}
  </span>
      <MarkComplete onClick={onMarkComplete} completed={completed}/>
      <DeleteTodo onClick={onDeleteTodo}/>
</div>
)

export default Todo
