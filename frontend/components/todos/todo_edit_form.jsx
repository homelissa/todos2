import React from 'react';

class TodoEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.todo
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.todoId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.todo !== newProps.todo) {
      this.setState(newProps.todo)
    }
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.state).then(() => this.props.history.push(`/todos/${this.props.match.params.todoId}`))
  }

  render() {
    if (!this.props.todo) {
      return null;
    }

    if (!this.state) {
      return null;
    }


        return(
          <form className='todo-form' onSubmit={this.handleSubmit}>
            <div className='todo-form-header'>Edit Todo!</div>
            <label>Title:
              <input
                placeholder='buy milk'
                value={this.props.title}
                onChange={this.update('title')} />

            </label>

            <label>Body:
              <textarea
                placeholder='2%'
                value={this.props.body}
                onChange={this.update('body')} >
              </textarea>
            </label>

            <button className='create-todo-button'>Submit</button>

          </form>
        )
  }
}

export default TodoEditForm;
