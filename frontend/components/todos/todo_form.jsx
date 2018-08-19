import { uniqueId } from '../../util/id_generator'
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return(
      <form className='todo-form' onSubmit={this.handleSubmit}>
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

        <button className='create-todo-button'>Create New Todo</button>

      </form>
    )
  }
};

export default TodoForm;
