import React from 'react';
import './UpdateModal.css'
import { Modal, Button, Icon } from 'react-materialize';

const UpdateModal = (props) => {

  let editField = [];

  for (let key in props) {
    if (key !== "handleUpdate" && key !== "updateField" && key !== "refreshPage") {
      editField.push(<label>{key.toString().split("_").join(" ")}<input onChange={(e) => props.updateField(`${key}`, e.target.value)} className="Modal" type="text" value={props[key]} /></label>)
    }
  }

  return (
    <Modal
      className='Modal'
      header='Edit Section'
      // fixedFooter
      actions={
        <div className="Modal-btns">
          <div className="Modal-btn"><Button modal="close" onClick={props.refreshPage}>Cancel<Icon left>cancel</Icon></Button></div>
          <div className="Modal-btn"><Button modal="close" onClick={props.handleUpdate}>Update<Icon left>check</Icon></Button></div>
        </div>
      }
      trigger={<Button floating small="true" className='red' waves='light' icon='edit' />}>
      { editField }
    </Modal>
  )

}

export default UpdateModal;