import { connect } from 'react-redux';
import TodoShow from './todo_show';
import { fetchTodo } from '../../actions/todo_actions';

const mSTP = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.todoId]
})

const mDTP = dispatch => ({
  fetchTodo: () => dispatch(fetchTodo)
})

export default connect(
  mSTP,
  mDTP
)(TodoShow)
