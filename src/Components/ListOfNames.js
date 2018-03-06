import React from 'react';
// cannot read property map of undefined
// weren't able to proceed past this point

const ListOfNames = props => {
  return (
    <div>
      <ul>{props.list}</ul>
    </div>
  );
};

export default ListOfNames;
