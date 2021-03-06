export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const fetchTodo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`,
  })
);

export const createTodo = todo => (
 $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: { todo: todo}
  })
);

export const deleteTodo = todo => (
 $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo.id}`
  })
);

export const updateTodo = todo => {
  return $.ajax({
    method: 'PATCH',
    url: `api/todos/${todo.id}`,
    data: { todo: todo }
  })
}
