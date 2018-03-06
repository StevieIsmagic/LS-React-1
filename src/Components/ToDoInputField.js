import React, { Component } from 'react';
import ListOfNames from './ListOfNames';

class ToDoInputField extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: ['stevie', 'marta', 'johnson']
    };
  }

  render() {
    console.log('inputField state: ', this.state.todoList);
    return (
      <div>
        <ListOfNames list={this.state.todoList} />
      </div>
    );
  }
}

export default ToDoInputField;
