import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';

// Provider gives components access to the Redux store, so that the components
// can read the application state and dispatch actions

const mSTP = state => ({
  todos: allTodos(state) // returns an array of todo objects
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
  mSTP,
  mDTP
)(TodoList);
