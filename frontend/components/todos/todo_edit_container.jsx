import { connect } from 'react-redux';
import TodoEditForm from './todo_edit_form';
import { updateTodo, fetchTodo } from '../../actions/todo_actions';

const mSTP = (state, ownProps) => {
  console.log(state);
    return (
      { todo: state.todos[ownProps.match.params.todoId] }
    )
}

const mDTP = dispatch => ({
  updateTodo: todo => dispatch(updateTodo(todo)),
  fetchTodo: id => dispatch(fetchTodo(id))
})

export default connect(
  mSTP,
  mDTP
)(TodoEditForm)
