import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {Divider} from '@material-ui/core';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <><TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} editTodo={this.props.editTodo} delTodo={this.props.delTodo} /> <span style={{margin: '1px'}} /></>
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