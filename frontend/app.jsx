import React from 'react';
import ToDoListContainer from './components/todos/todo_list_container';
import TodoShowContainer from './components/todos/todo_show_container';
import Index from './components/index';
import { Route, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div>
    <Index />
      <Route exact path='/' component={ToDoListContainer} />
      <Route exact path='/todos/:todoId' component={TodoShowContainer} />
  </div>
);

export default App;
