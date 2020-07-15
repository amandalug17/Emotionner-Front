import {Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import './../../App.css'



class CreateArticle extends Component{

    constructor(props){
        super(props);
        this.state = {
          campTitle: "",
          campContent: "",
          campDescription:"",
          campAuthor:"",
          campPremium:"",
          campEmotion: "",
          campImagen: ""
        }
      }

    render(){
      return(
        <Container fluid="md">
        <Row>
          <Col>
          <div className='card card-signin my-5'>
            <div className='card-body'>
               
                <h5 className='card-title text-center text-uppercase'>CREAR ARTÍCULO</h5>
                <Form className='form-singin'>
                    <FormGroup>
                        <Label className="art-label">TÍTULO</Label>
                        <Input className='form-control' type="title" placeholder="Introduzca el título del artículo "
                        value={this.state.campTitle} onChange={(value)=> this.setState({campTitle:value.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="art-label" for="exampleText">DESCRIPCIÓN</Label>
                        <Input type="textarea" name="text" id="exampleText"  rows="8" cols="80"
                        value={this.state.campDescription} onChange={(value)=> this.setState({campDescription:value.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="art-label" for="exampleText">CONTENIDO</Label>
                        <Input type="textarea" name="text" id="exampleText" rows="30" cols="80"
                        value={this.state.campContent} onChange={(value)=> this.setState({campContent:value.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="art-label">AUTOR</Label>
                        <Input className='form-control' type="title" placeholder="Introduzca el autor del artículo "
                        value={this.state.campAuthor} onChange={(value)=> this.setState({campAuthor:value.target.value})}></Input>
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
                    <FormGroup>
                        <Label className="art-label">IMÁGEN</Label>
                        <Input className='form-control' type="Imágen" placeholder="Introduzca una imágen para el artículo"
                        value={this.state.campImagen} onChange={(value)=> this.setState({campImagen:value.target.value})}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label className="art-label">PREMIUM</Label>
                        <Input type="select" id="exampleCustomSelect" name="customSelect" value={this.state.campPremium} onChange={(value)=> this.setState({campPremium:value.target.value})}>
                        <option value=""> Seleccione</option>
                        <option>Premium</option>
                        <option>No premium</option>
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
                        Guardar artículo
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
    sendSave(){

        if (this.state.campTitle=="") {
          alert("Introduzca el título")
        }
        else if (this.state.campDescription=="") {
           alert("Introduzca una descripción")
        }
        else if (this.state.campContent=="") {
           alert("Introduzca el contenido")
        }
        else if (this.state.campAuthor=="") {
           alert("Introduzca el autor")
        }
        else if (this.state.campPremium=="") {
            alert("Introduzca el tipo de usuario en premium")
         }
        else if (this.state.campPremium==="Premium") {
            this.state.campPremium="true"
         }
         else if (this.state.campPremium==="No premium") {
            this.state.campPremium="false"
         }
         else if (this.state.campEmotion==="") {
            alert("Introduzca una emoción asociada al artículo")
         }
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
          const datapost = {
            title : this.state.campTitle,
            content : this.state.campContent,
            description : this.state.campDescription,
            author : this.state.campAuthor,
            image : this.state.campImagen,
            premium : this.state.campPremium,
            emotionId : this.state.campEmotion
          }

          console.log(datapost)
          
          axios.post("https://emotionner.herokuapp.com/articles/createArticle",datapost)
          .then(response=>{
            console.log(response)
            
            if (response.data.success) {
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
export default CreateArticle