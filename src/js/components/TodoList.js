import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, onMarkComplete, onDeleteTodo }) => (
  <div>
    {todos.map(todo =>
      <Todo key={todo.id} onMarkComplete={() => onMarkComplete(todo.id)}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      {...todo}/>
)}
  </div>
)

export default TodoList;
