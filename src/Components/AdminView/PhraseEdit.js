import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import './../../App.css'
/**
 * Form for CRUD operations in Tasks table
 */

class AddEditForm extends React.Component {
    state = {
        id: '',
        title: '', 
        description: '',
        content: '', 
        author: '', 
        image: '', 
        emotion:'',
        premium: ''
    }
    /**
     * Listen to the value changes on the table
     * @param {*} e 
     */
    onChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }
    
    submitFormEdit = e => {
      e.preventDefault()
      let data={
        id: this.state.id,
        phrase: this.state.phrase,
      }
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/phrases/updatePhrase`, {
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
        const { id, phrase} = this.props.item
        this.setState({ id, phrase})
      }

    }
  
    render() {
      return (
        <div className = 'styleLetters'>
        <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd} autoComplete= 'off'>
        <div className = "try">
          <FormGroup>
            <Label for="first" style={{marginBottom:'10px'}}>Ingrese una nueva frase</Label>
            <Input type="textarea" name="phrase" id="phrase" onChange={this.onChange} value={this.state.phrase === null ? '' : this.state.phrase} />
          </FormGroup>
          </div>
          <Col>
          <div className="d-flex justify-content-end">
          <Button className='btn btn--opacity homepagebutton' style={{marginTop: '20px', width:'50%'}}>Submit</Button>
          </div>
          </Col>
        </Form>
        </div>
      );
    }
  }
  
  export default AddEditForm