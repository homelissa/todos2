import { uniqueId } from '../../util/id_generator'
import React from 'react';
import TodoFormContainer from './todo_form_container';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
   e.preventDefault();
   const todo = Object.assign({}, this.state);
   this.props.createTodo({ todo }).then(
     () => this.setState({
       title: "",
       body: ""
     })
   );
 }

 // handleSubmit(e) {
 //   e.preventDefault();
 //
 //   this.props.createTodo(this.state).then(
 //     () => this.setState({
 //       title: "",
 //       body: ""
 //     })
 //   );
 // }


  render() {


    return(
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <div className='todo-form-header'>Create New Todo!</div>
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

        <button className='create-todo-button'>Create</button>

      </form>
    )
  }
};

export default TodoForm;
