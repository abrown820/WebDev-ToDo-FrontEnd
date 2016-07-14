import { connect } from 'react-redux'
import { asynctoggleToDo, asyncdeleteToDo, asyncrequestToDos  } from '../actions/ToDoActions.js'
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
    VisibleTodos: getVisibleTodos(state.toDoAppReducer.todos, state.toDoAppReducer.visibilityFilter),
    Todos: state.toDoAppReducer.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMarkComplete: (id,completed) => {
      dispatch(asynctoggleToDo(id,completed))
    },
    onDeleteTodo: (id) => {
      dispatch(asyncdeleteToDo(id))
    },
    getInitialTodos: () => {
      dispatch(asyncrequestToDos())
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
