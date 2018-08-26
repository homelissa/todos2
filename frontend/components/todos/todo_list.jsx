import React from 'react';
import TodoListItem from './todo_list_item';
import TodoFormContainer from './todo_form_container';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, deleteTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        deleteTodo={ deleteTodo }
      />
    ))


    return(
      <div className='todo-list'>
        <ul>{ todoItems }</ul>
        <TodoFormContainer />
      </div>
    )
  }



}

export default TodoList;
