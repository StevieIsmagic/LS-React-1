import React, { Component } from 'react';
import ListOfNames from './Components/ListOfNames';
import ToDoInputField from './Components/ToDoInputField';

class App extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <h1> Hi from Stevie's Main To-Do App Page </h1>
        <ListOfNames />
        <ToDoInputField />
      </div>
    );
  }
}

export default App;
