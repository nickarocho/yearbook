import React from 'react';
import './UpdateModal.css'
import { Modal, Button } from 'react-materialize';

const UpdateModal = (props) => {

  var editField = [];
  for (var field in props) {
    editField.push(<label>{field.toString().split("_").join(" ")}
    <input onChange={ (e) => props.updateField(field, e.target.value) } className="Modal" type="text" value={props[field]} /></label>)
  }

  return (
    <Modal
      className='Modal'
      header='Update Section'
      fixedFooter
      trigger={<Button floating small className='red' waves='light' icon='edit' />}>
      { editField }
      <Button onClick={props.handleUpdate} >Update</Button>
    </Modal>
  )

}

export default UpdateModal;


/* 


{props.map.changwField => <input className="Modal" label="Statement" type="" type="text" value={props.curStatement} onChange={this.handleChange}/>}
      <label>
        For the thing  
        <input className="Modal" label="Statement" type="" type="text" value={props.curStatement} onChange={this.handleChange}/>
      </label>
      <input className="Modal" label="Statement" type="" type="text" value={props.curStatement} onChange={this.handleChange}/>

    */