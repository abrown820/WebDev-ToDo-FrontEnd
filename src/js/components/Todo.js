import React from 'react';
import DeleteTodo from './DeleteTodo';

const Todo = ({description, onTodoClick, onDeleteTodo, completed}) => (
<div>
  <span
    onClick={onTodoClick}
    style={{textDecoration: completed ? 'line-through': 'none'}}>
    {description}
  </span>
      <DeleteTodo onClick={onDeleteTodo}/>
</div>
)

export default Todo
