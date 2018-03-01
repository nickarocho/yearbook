import React from 'react';

const InitLife = (props) => {

  return (
    <div>
      <h2>INITIAL LIFE component</h2>
      <hr />
      <div>
        {props.user.firstName}
        {props.user.lastName}
      </div>
    </div>
  )

}

export default InitLife;