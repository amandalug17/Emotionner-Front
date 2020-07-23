/**
 * Imports
 */
import React, { Component } from 'react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ArticleInfo from '../Forms/articleInfo';
import './../../App.css'

/**
 * This is the class for the modal Info or modal for the articles
 */
class ModalInfo extends Component {
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
    
        button = <>
            <p className="read-more">
                <a className="link" style={{cursor:'pointer'}} onClick={this.toggle } title='Articulo'>Leer más</a>
            </p>
         </>

      return (
      <div className='articleModal'>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='lg'>
          <ModalHeader toggle={this.toggle} close={closeBtn}></ModalHeader>
          <ModalBody>
            <ArticleInfo
            toggle={this.toggle}
            item={this.props.item} />
          </ModalBody>
          <ModalFooter className='trianglefooter'>
          <div id="triangle" style={{margin:'0 !important'}}>
                <svg viewBox="0 0 1260 300"
                    preserveAspectRatio="xMidYMin">  
                <polygon fill="CurrentColor" points="1335 280 -65 280 -65 -10 635 100 1335 -10 1335 280"/>
                </svg>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalInfo