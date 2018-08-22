import { connect } from 'react-redux';
import { createTodo } from '../../actions/todo_actions';
import TodoForm from './todo_form';

const mSTP = state => ({

})

const mDTP = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo))
})

export default connect(
  mSTP,
  mDTP
)(TodoForm)
