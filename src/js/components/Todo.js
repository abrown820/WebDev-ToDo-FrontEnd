import React from 'react';

const Todo = ({description, onClick, completed}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through': 'none'}}>
      {description}
  </li>
)

export default Todo;
