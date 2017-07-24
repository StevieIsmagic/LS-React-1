import React, { Component } from 'react';
import ListOfNames from './ListOfNames';

class ToDoInputField extends Component {
  constructor() {
    super();
    this.state = {
    	todo: '',
    	todosList: ['stevie']
    };

  }

  render() {
  	return (
  		<ListOfNames data={this.state.todosList} />
  		)
  }
};








export default ToDoInputField;