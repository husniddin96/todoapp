import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  componentDidMount() {

  }

  render() {
    return this.props.todos.map((todo) => (
      <><TodoItem key={todo._id} todo={todo} markComplete={this.props.markComplete} editTodo={this.props.editTodo} delTodo={this.props.delTodo} /> <span style={{ margin: '1px' }} /></>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;