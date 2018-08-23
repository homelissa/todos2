import React from 'react';

class TodoShow extends React.Component{

  constructor(props) {
    super(props);
    this.state = this.props.todo
  }

  componentDidMount() {
    debugger
    this.props.fetchTodo(this.props.match.params.todoId)
  }

  // render only knows when the state is updated, not the props
  componentWillReceiveProps(newProps) {
    debugger
    if (this.props.todo !== newProps.todo) {
      console.log('inside receive ')
      this.setState(newProps.todo)
    }
  }

  render() {
    // const { todo } = this.state;

    if (!this.props.todo) {
      console.log('hi')
      return null;
    }




    return(
      <div>
        <h4>{this.state.title}</h4>
        <h4>{this.state.body}</h4>
      </div>
    )
  }
}

export default TodoShow;
