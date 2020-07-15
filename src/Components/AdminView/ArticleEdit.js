import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import AuthService from '../../Services/auth.service';
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
        title: this.state.title,
        description: this.state.description,
        content: this.state.content,
        author: this.state.author,
        image: this.state.image, 
        emotion: this.state.emotion,
        premium: this.state.premium
      }
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/articles/updateArticle`, {
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
        const { id, title, description,content, author, image, emotion, premium} = this.props.item
        this.setState({ id, title, description,content, author, image, emotion, premium})
      }

    }
  
    render() {
      return (
        <div className = 'styleLetters'>
        <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd} autoComplete= 'off'>
        <div className = "try">
          <FormGroup>
            <Label for="first">Título del Artículo</Label>
            <Input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />
          </FormGroup>
          <FormGroup>
            <Label for="last">Description</Label>
            <Input type="textarea" name="description" id="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description}  />
          </FormGroup>
          <FormGroup>
            <Label for="last">Contenido</Label>
            <Input type="textarea" name="content" id="content" onChange={this.onChange} value={this.state.content === null ? '' : this.state.content}  />
          </FormGroup>
          <FormGroup>
            <Label for="last">Autor</Label>
            <Input type="text" name="author" id="author" onChange={this.onChange} value={this.state.author === null ? '' : this.state.author}  />
          </FormGroup>
          <FormGroup>
            <Label for="last">Imágen</Label>
            <Input type="text" name="image" id="image" onChange={this.onChange} value={this.state.image === null ? '' : this.state.image}  />
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