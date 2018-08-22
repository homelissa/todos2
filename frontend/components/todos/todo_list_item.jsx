import React from 'react';
import { Link } from 'react-router-dom';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div className='todo-list-item'>
        <div className='todo-list-item-title'><Link to={`/todos/${this.props.todo.id}`}>{this.props.todo.title}</Link></div>
        <button onClick={ () => this.props.deleteTodo(this.props.todo)}>Delete Todo</button>
      </div>
    )
  }
}

export default TodoListItem;
