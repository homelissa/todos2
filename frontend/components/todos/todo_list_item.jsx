import React from 'react';
import { Link } from 'react-router-dom';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <li className='todo-list-item'>
        <Link to={`/todos/${this.props.todo.id}`}>{this.props.todo.title}</Link>
        <Link className='todo-list-item-link' to={`/todos/${this.props.todo.id}/edit`}>Edit Todo</Link>
        <button onClick={ () => this.props.deleteTodo(this.props.todo)}>Delete Todo</button>
      </li>
    )
  }
}

export default TodoListItem;
