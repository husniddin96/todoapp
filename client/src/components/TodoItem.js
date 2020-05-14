import React, { Component } from "react";
import PropTypes from "prop-types";
import { RiDeleteBin5Line } from 'react-icons/ri';
import Dialog from './Dialog';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none",
    };
  };


  render() {
    const id = this.props.todo._id;
    const { title, isCompleted, createdAt } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            defaultChecked={isCompleted}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {" "}
          {title}
          <span style={{ marginRight: '30%' }}></span>
          {createdAt}
          {/* <button onClick={this.props.editTodo.bind(this, id)} style={btnStyle2}><FiEdit /></button> */}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><RiDeleteBin5Line /></button>
          <Dialog todo={this.props.todo} style={{ float: "right" }} editTodo={this.props.editTodo} />
        </div>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right"
};

const btnStyle2 = {
  background: "blue",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right",
  marginRight: "10px",
  marginBottom: "10px"
};

export default TodoItem;