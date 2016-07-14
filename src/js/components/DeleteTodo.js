import React from 'react';

const DeleteTodo = ({ onClick }) => (
  <i className="fa fa-times fa-2x"
  style={{color: 'red'}}
  onClick={onClick}
  >
  </i>
)

export default DeleteTodo
