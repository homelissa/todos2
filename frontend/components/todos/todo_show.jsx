import React from 'react';

class TodoShow extends React.Component{
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.todoId)
  }

  render() {

    const { todo } = this.props;

    if (!todo) {
      console.log('hi')
      return null;
    }


    return(
      <div>
        <h4>{todo.title}</h4>
        <h4>{todo.body}</h4>
      </div>
    )
  }
}

export default TodoShow;
