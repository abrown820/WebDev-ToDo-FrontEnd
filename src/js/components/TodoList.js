import React from 'react';
import Todo from './Todo.js';
import DeleteTodo from './DeleteTodo';

const TodoList = ({ todos, onTodoClick, onDeleteTodo }) => (
  <div>
    {todos.map(todo =>
      <Todo key={todo.id} onTodoClick={() => onTodoClick(todo.id)}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      {...todo}/>
)}
  </div>
)

export default TodoList;
