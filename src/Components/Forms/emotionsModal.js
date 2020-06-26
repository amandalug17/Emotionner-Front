import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditFormE from './emotionsEdit';

class ModalFormE extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }
  
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
     
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

      if(label === 'Edit'){
        button = <button type="button" class="btn btn-warning btn-sm" onClick={this.toggle } title='Editar'> {label}</button>
      } else {
        button = <button type="button" class="btn btn-success btn-sm" onClick={this.toggle } title='Añadir Estado de Animo'> {label}</button>
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