import React from 'react';

const MarkComplete = ({ onClick, completed }) => (
  <i className="fa fa-check fa-2x"
  style={{color: completed ? 'green' : 'red'}}
  onClick={onClick}
  >
  </i>
)

export default MarkComplete
