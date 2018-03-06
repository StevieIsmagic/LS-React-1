<<<<<<< HEAD
/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListOfNames from './ListOfNames';
import ToDoInputField from './ToDoInputField';

//require('!style-loader!css-loader!sass-loader!./index.scss');

const App = () => {
  return (
  <div>
    <h1> Hi from Main App Page </h1>
  	<ListOfNames />
    <ToDoInputField />
  </div>
 ) 
};






ReactDOM.render(<App />, document.getElementById('root'));
=======
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));
>>>>>>> 5ff6dedcaf1963861854e30de7231af9cc956458
