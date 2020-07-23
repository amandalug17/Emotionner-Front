/**
 * Imports
 */
import { Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import './../../App.css'
/**
 * This class is the create phrase component in the administrator view
 */
class CreatePhrase extends Component{

    constructor(props){
        super(props);
        this.state = {
          campPhrase: "",
          campEmotion: ""
        }
      }

    render(){
        return(
          <Container fluid="md">
            <Row>
              <Col>
              <div className='card card-signin my-5'>
                <div className='card-body'>
                    <h5 className='card-title text-center text-uppercase'>CREAR FRASE</h5>
                    <Form className='form-singin'>
                        <FormGroup>
                            <Label className="art-label">FRASE</Label>
                            <Input className='form-control' type="title" placeholder="Introduzca una frase "
                            value={this.state.campPhrase} onChange={(value)=> this.setState({campPhrase:value.target.value})}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className="art-label">ÁNIMO</Label>
                            <Input type="select" id="exampleCustomSelect" name="customSelect"
                            value={this.state.campEmotion} onChange={(value)=> this.setState({campEmotion:value.target.value})}>
                            <option value="">Ánimo</option>
                            <option>Feliz</option>
                            <option>Bien</option>
                            <option>Triste</option>
                            <option>Enojado</option>
                            <option>Ansioso</option>
                            <option>Estresado</option>
                            </Input>
                        </FormGroup>
                        
                        <label></label>
                        <div className="form-group">
                        <div className= "d-flex justify-content-center">
                          <a className="anim" onClick={()=>this.sendSave()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Guardar frase
                          </a>
                        </div>
                        </div>
                </Form>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
            )
        
    }
  /**
     * This function is to submit our phrase to the db, on click on the submit button on the form
     */
    sendSave(){

      /**
       * Validations
       */
        if (this.state.campPhrase=="") {
          alert("Introduzca una frase")
        }
         else if (this.state.campEmotion==="") {
            alert("Introduzca una emoción asociada al artículo")
         }//Emotion cast to the equivalent id
         else if (this.state.campEmotion==="Feliz") {
            this.state.campEmotion=1
         }
         else if (this.state.campEmotion==="Bien") {
            this.state.campEmotion=11
         }
         else if (this.state.campEmotion==="Triste") {
            this.state.campEmotion=21
         }else if (this.state.campEmotion==="Enojado") {
            this.state.campEmotion=31
         }
         else if (this.state.campEmotion==="Ansioso") {
            this.state.campEmotion=41
         }
         else if (this.state.campEmotion==="Estresado") {
            this.state.campEmotion=51
         }
        else {
          // If the info is valid
          const baseUrl = "https://emotionner.herokuapp.com/phrases/createPhrase"

          const datapost = {
            phrase : this.state.campPhrase,
            emotionId : this.state.campEmotion
          }

         /**
           * Axios call to create an phrase
           */
          
          axios.post(baseUrl,datapost)
          .then(response=>{
            if (response.data.success===true) {
                alert(response.data.message)
                window.location.reload()
                
            }
            else {
              alert(response.data.message)
            }
          }).catch(error=>{
            alert(""+error)
          })
     
        }
        
     
      }
    
}
export default CreatePhrase