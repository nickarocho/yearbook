import React from 'react';

const CurLife = (props) => {

  return (
    <div>
      <h2>CURRENT LIFE component</h2>
      <hr />
      <div>
        {props.user.firstName}
        {props.user.lastName}
      </div>
    </div>
  )

}

export default CurLife;