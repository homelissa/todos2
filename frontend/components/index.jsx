import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render() {
    return(
      <h1><Link to='/' >Melissa's Todo List </Link></h1>
    )
  }
}

export default Index;
