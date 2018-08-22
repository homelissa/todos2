import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='todo-list-item'>
        <li className='todo-list-item-title'>{this.props.todo.title}</li>
        <button onClick={ () => this.props.deleteTodo(this.props.todo)}>Delete Todo</button>
      </div>
    )
  }
}

export default TodoListItem;
