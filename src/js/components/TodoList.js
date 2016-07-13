import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount(){
  getInitialTodos()
}

render(){
return (
  <div>
    {
      this.props.Todos == undefined ? <p>Loading...</p> :
      VisibleTodos.map(todo =>
      <Todo key={todo.id} onMarkComplete={() => onMarkComplete(todo.id)}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      {...todo}/>)
    }
  </div>
)}
}

export default TodoList;
