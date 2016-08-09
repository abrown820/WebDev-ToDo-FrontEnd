import { connect } from 'react-redux'
import {
  asynctoggleToDo,
  asyncdeleteToDo,
  asyncrequestToDos,
  asyncUpdateTodoDescription,
  updateTodoDescription
  } from '../actions/ToDoActions.js'
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
    visibleTodos: getVisibleTodos(state.toDoAppReducer.todos, state.toDoAppReducer.visibilityFilter),
    todos: state.toDoAppReducer.todos
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
    },
    asyncUpdateTodo: (id, newDescription) => {
      dispatch(asyncUpdateTodoDescription(id, newDescription))
    },
    updateTodo: (id, newDescription) => {
      dispatch(updateTodoDescription(id, newDescription))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
