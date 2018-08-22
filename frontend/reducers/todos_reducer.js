import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = merge({}, state, action.todos)
      return nextState;
    case RECEIVE_TODO:
      let newTodo = { [action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;
