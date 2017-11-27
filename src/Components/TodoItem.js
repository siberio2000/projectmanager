import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This is displays once we add item in the text field

class TodoItem extends Component {
  render() {
    return (
      <li className="Todos">
        <b>{this.props.todo.id}</b> - {this.props.todo.title} 
      </li>
    );
  }
}

TodoItem.propTypes = {
      todo:PropTypes.array,    
    };

export default TodoItem;
