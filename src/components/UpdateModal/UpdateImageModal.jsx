import React from 'react';
import './UpdateModal.css'
import { Modal, Button, Icon } from 'react-materialize';

const UpdateImageModal = (props) => {

  let editField = [];

  for (let key in props) {
    if (key !== "handleUpdate" && key !== "updateField" && key !== "refreshPage" && key !== "handleFocus" && key !== "handleImageUpdate") {
      editField.push(<label>{key.toString().split("_").join(" ")}<input onChange={(e) => props.updateField(`${key}`, e.target.value)} onFocus={props.handleFocus} className="Modal" type="text" value={props[key]} /></label>)
    }
  }

  return (
    <Modal
      className='Modal'
      header='Edit Section'
      // fixedFooter
      actions={
        <div className="Modal-btns">
          <div className="Modal-btn"><Button modal="close" className="#e64a19 deep-orange darken-2" onClick={props.refreshPage}>Cancel<Icon left>cancel</Icon></Button></div>
          <div className="Modal-btn"><Button modal="close" className="#01579b light-blue darken-4" onClick={props.handleImageUpdate}>Update<Icon left>check</Icon></Button></div>
        </div>
      }
      trigger={<Button floating small="true" className="#01579b light-blue darken-4" waves="light" icon="edit" />}>
      { editField }
    </Modal>
  )

}

export default UpdateImageModal;