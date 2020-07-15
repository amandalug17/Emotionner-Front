import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import AuthService from '../../Services/auth.service';
import './../../App.css'

/**
 * Form for CRUD operations in Tasks table
 */

class AddEditFormE extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      userId: '',
      emotionId: '',
      description: ''
  }
  }
    
    /**
     * Listen to the value changes on the table
     * @param {*} e 
     */
    onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    changeEmotion = (e) => {  
      this.setState({  
              emotionId: e.target.value  
              
      })  
    }  
    /**
     * If we're adding a new task we use this function 
     * If props.item meaning we dont pass a item through props
     * we are adding a new tasks
     * @param {*} e 
     */
    submitFormAdd = e => {
        e.preventDefault()
        if(this.state.emotionId === ''){
          alert('Por favor elija una emoción')
        }else {
            const currentUser = AuthService.getCurrentUser();
            const id = currentUser.id;
            fetch('https://emotionner.herokuapp.com/users/registerEmotion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              user_id: id,
              emotion_id: parseInt(this.state.emotionId),
              description: this.state.description
            })
          })
            .then(response => response.json())
            .then(item => {
              console.log(item.data)
              window.location.reload()
            })
            .catch(err => console.log(err))
        }
       
      }
      /**
       * If we pass a item trough props we are editing it so we use ]
       * this function with the axios PUT
       * @param {*} e 
       */
    submitFormEdit = e => {
      e.preventDefault();  
      if(this.state.emotionId === undefined){
        this.state.emotionId = this.props.item.emotion_id
        console.log(`${this.state.emotionId}`)
      }
      
      const currentUser = AuthService.getCurrentUser();
      const user = currentUser.id;
      const id = this.state.id
      let data={
        id: this.state.id,
        user_id: user,
        emotion_id: parseInt(this.state.emotionId),
        description: this.state.description
      }
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/users/updateRegister`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(item => {
          console.log(item.data)
          window.location.reload()
        })
        .catch(err => console.log(err))
        
        
    }
  
    componentDidMount(){
      // if item exists, populate the state with proper data
      if(this.props.item){
        const { id, userId, emotionId, description} = this.props.item
        this.setState({ id, userId, emotionId, description})
      }
    }

    
  
    render() {
      return (
        <div className = 'styleLetters'>
        <div className="try">
        <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd} autoComplete= 'off'>
          <FormGroup tag="fieldset">
            <Label ><h2 style={{fontWeight:'lighter', fontFamily:'Roboto, Sans Serif'}}>¿Cómo te sientes?</h2></Label>
            <div className='row'>
              <Col>
                <FormGroup check className='d-flex justify-content-start'>
                <Label >  
                  <Input type="radio" name="increible" value='1' checked={this.state.emotionId === '1'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="increible far fa-grin-stars"></i>
                    <p>Increible</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
              <Col >
                <FormGroup check className='d-flex justify-content-start'>
                <Label check>  
                  <Input type="radio" name="bien" value="11"
                  checked={this.state.emotionId === '11'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="bien far fa-smile"></i>
                    <p>Bien</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
            </div>
            <div className='row' >
            <Col>
                <FormGroup check className='d-flex justify-content-start'>
                <Label check>  
                  <Input type="radio" name="triste" value="21"
                  checked={this.state.emotionId === '21'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="triste far fa-sad-tear"></i>
                    <p>Triste</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
              <Col >
                <FormGroup check className='d-flex justify-content-start'>
                <Label check>  
                  <Input type="radio" name="enojado" value="31"
                  checked={this.state.emotionId === '31'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="enojado far fa-angry"></i>
                    <p>Enojado</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
            </div>
            <div className='row'>
            <Col>
                <FormGroup check className='d-flex justify-content-start'>
                <Label check>  
                  <Input type="radio" name="ansioso" value="41"
                  checked={this.state.emotionId === '41'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="ansioso far fa-grimace"></i>
                    <p>Ansioso</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
              <Col>
                <FormGroup check className='d-flex justify-content-start'>
                <Label check>  
                  <Input type="radio" name="estresado" value="51"
                  checked={this.state.emotionId === '51'}
                  onChange={this.changeEmotion}
                  />
                  <span className='text-center'>
                    <i className="estresado far fa-tired"></i>
                    <p>Estresado</p>
                    </span>
                </Label>
              </FormGroup>
              </Col>
            </div>
          </FormGroup>
          <FormGroup >
            <Label for="last"><h4 style={{fontWeight:'lighter', fontFamily:'Roboto, Sans Serif'}}>¿Quieres expresarte mejor?</h4></Label>
            <Input type="textarea" name="description" id="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description}  />
          </FormGroup>
          <Col>
          <div className="d-flex justify-content-end">
          <Button className='btn btn--opacity homepagebutton' style={{marginTop: '20px', width:'50%'}}>Submit</Button>
          </div>
          </Col>
        </Form>
        </div>
        </div>
        
      );
    }
  }
  
  export default AddEditFormE