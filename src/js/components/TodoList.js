import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

componentDidMount(){
  const { getInitialTodos } = this.props;
  getInitialTodos()
}

render(){
  const { VisibleTodos, Todos, onDeleteTodo, onMarkComplete} = this.props;
return (
  <div>
    {
      Todos == undefined ? <p>Loading...</p> :
      VisibleTodos.map(todo =>
      <Todo key={todo.id} onMarkComplete={() => onMarkComplete(todo.id, !todo.completed)}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      {...todo}/>)
    }
  </div>
)}
}

export default TodoList;
