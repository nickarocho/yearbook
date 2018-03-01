import React from 'react';

const ElapLife = (props) => {

  return (
    <div>
      <h2>ELAPSED LIFE component</h2>
      <hr />
      <div>
        {props.user.firstName}
        {props.user.lastName}
      </div>
    </div>
  )

}

export default ElapLife;