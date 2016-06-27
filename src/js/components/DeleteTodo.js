import React from 'react';

const DeleteTodo = ({ onClick }) => (
  <i className="fa fa-times"
  style={{color: 'red'}}
  onClick={onClick}
  >
  </i>
)

export default DeleteTodo
