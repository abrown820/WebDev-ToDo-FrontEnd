import React from 'react';

const MarkComplete = ({ onClick, completed }) => (
  <i className="fa fa-check"
  style={{color: completed ? 'green' : 'red'}}
  onClick={onClick}
  >
  </i>
)

export default MarkComplete
