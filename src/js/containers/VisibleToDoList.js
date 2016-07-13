import { connect } from 'react-redux'
import { toggleToDo, deleteToDo, requestToDos  } from '../actions/ToDoActions.js'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    VisibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
    Todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMarkComplete: (id) => {
      dispatch(toggleToDo(id))
    },
    onDeleteTodo: (id) => {
      dispatch(deleteToDo(id))
    },
    getInitialTodos: () => {
      dispatch(requestToDos(todos))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
