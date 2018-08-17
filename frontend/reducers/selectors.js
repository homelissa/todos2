//a function to transform an object filled with todos, into an array for easy
//consumption by our components.

const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export default allTodos;
