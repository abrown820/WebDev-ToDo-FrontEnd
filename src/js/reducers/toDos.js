import { VisibilityFilters } from '../actions/ToDoActions';

// Reducer to handle visibilityFilter action
function visFilterReducer(state = 'SHOW_ALL', action){
  switch (action.type){
    case 'SET_VISBILITY_FILTER':
    return {visibilityFilter: action.filter}
    default:
      return state
  }
}
// Reducer to handle ADD and TOGGLE ToDo actions
function toDoReducer(state = [], action){
  switch (action.type){
    case 'ADD_TODO':
      return [...state, {id: action.id, description: action.description,
      completed: false}]
    case 'DELETE_TODO':
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ] 
    case 'TOGGLE_TODO':
    return state.map((todo, id) => {
      if (id == action.id) {
        return Object.assign({}, todo, {completed: !todo.completed})
      }
    return todo
  })
      default:
        return state
  }
}

// ToDo State Reducer
function toDoApp(state = [], action) {
  return {
  visibilityFilter: visFilterReducer(state.visibilityFilter, action),
  todos: toDoReducer(state.todos, action)
  }
}
