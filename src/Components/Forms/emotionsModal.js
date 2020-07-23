import React, { Component } from 'react'
import {  Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditFormE from './emotionsEdit';
import './../../App.css'
/**
 * Emotions modal component
 */
class ModalFormE extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }
  /**
    * Function to manage the state of the modal
   */
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
     
    }))
  }

  render() {
      const closeBtn = <button className="close d-flex justify-content-end" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

      title = label;

      if(label === 'Edit'){
        button = <>
          <div className = 'buttonArrow' style={{marginTop:'18px'}}>
              <a className="link" style={{textTransform: 'uppercase'}} onClick={this.toggle } title='Editar'>{label}</a>
          </div>
        </>
      } else {
        button = <>
          <div className = 'buttonArrow' style={{marginTop:'18px'}}>
              <a className="link" style={{textTransform: 'uppercase'}} onClick={this.toggle } title='Añadir Estado de Animo'>{label}</a>
          </div>
        </>
      }


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditFormE
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalFormE