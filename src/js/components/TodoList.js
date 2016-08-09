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
    const { visibleTodos, todos, onDeleteTodo, onMarkComplete, asyncUpdateTodo, updateTodo} = this.props;
    return (
      <div>
        {
          todos == [] ? <p>Loading...</p> :
          visibleTodos.map(todo =>
          <Todo key={todo.id} onMarkComplete={() => onMarkComplete(todo.id, !todo.completed)}
            onDeleteTodo={() => onDeleteTodo(todo.id)} updateTodo={updateTodo} asyncUpdateTodo={asyncUpdateTodo}
          {...todo}/>)
        }
      </div>
    )
  }

}

export default TodoList;
