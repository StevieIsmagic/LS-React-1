import React from 'react';
// cannot read property map of undefined
// weren't able to proceed past this point

const ListOfNames = (props) => {
  return (
    <ul>
      {props.todosList.map((todo) => {
  	    return <li> {todo} </li>
    })}
   </ul>
    )
};















export default ListOfNames;