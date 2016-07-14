import React from 'react';
import DeleteTodo from './DeleteTodo';
import MarkComplete from './MarkComplete'
import importanceConverter from '../actions/importance'

const Todo = ({description, onMarkComplete, onDeleteTodo, completed, importance}) => (
<div>
  <span style={{'textDecoration': completed ? 'line-through' : 'none'}}>
  	<div class="description">
    {description}
    </div>
    <div class="importance">
    {
    	importanceConverter(importance)
    }
    </div>
  </span>
      <MarkComplete onClick={onMarkComplete} completed={completed}/>
      <DeleteTodo onClick={onDeleteTodo}/>
</div>
)

export default Todo
