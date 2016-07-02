const url = 'https://daniel-todo-backend.herokuapp.com/tasks/?format=json'

export function fetchToDos(){
  fetch(url, {method: 'GET'})
}

export default api;
