import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalFormE from '../Forms/emotionsModal'
import EmotionsTable from '../Elements/emotionsTable'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'
import Quote from '../Elements/quote'
import EmotionsHero from '../Elements/emotionsHero'
import Navbar_I from "../Elements/navbar";
import './../../App.css'

/**
 * Emotions View where all agenda components are called we return the Emotions Table and the button 
 * to add a new emotions
 */
class emotionsView extends Component {
  state = {
    items: []
  }

  /**
   * GetItems()
   * @return emotions in the database
   */

  getItems(){
    //We get the current user
    const currentUser = AuthService.getCurrentUser();
    //We get its id
    const id = currentUser.id;
    //Then we execute the axios call to the API
    axios.get(`https://emotionner.herokuapp.com/users/registeredEmotions/${id}`)
        .then(response => {
          let appointments = response.data;
          this.setState({
            items : appointments
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
/***
 * Adds a new item to the state of the component
 */
  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }
/**
 * Updates de state of the component
 * @param {*} item 
 */
  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }


  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      <>
      <Navbar_I/>
      <EmotionsHero/>
      <Container className="container" style={{marginBottom: '20px'}}>
        <Row>
          <Col>
          <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> ¿Cómo te haz estado sintiendo?</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmotionsTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            <ModalFormE buttonLabel="Registra tus emociones" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
      <Quote/>
      <Footer/>
      </>
    )
  }
}

export default emotionsView
