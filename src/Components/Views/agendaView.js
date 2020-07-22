/**
 * Imports
 */
import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../Forms/tasksModal'
import TasksTable from '../Elements/taskTable'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerInside'
import TasksHero from '../Elements/taskHero';
import Taskquote from '../Elements/taskQuote';
import './../../App.css'
import Navbar_I from "../Elements/navbar";
/**
 * Agenda View where all agenda components are called
 * We render the task tables and the add a Task Button
 */
class agendaView extends Component {
  /**
   * We set the state to an array of items, the items are the tasks of tje database
   */
  state = {
    items: []
  }

  /**
   * GetItems()
   * @return tasks in the database
   */

  getItems(){
    //We get the current user
    const currentUser = AuthService.getCurrentUser();
    //We get its id
    const id = currentUser.id;
    //Then we execute the axios call to the API
    axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`)
        .then(response => {
          let aux = response.data.tasks.tasks;
          //We filter through enabled tasks only
          let appointments = aux.filter(x => x.enabled === 1)
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
 * @param item as an object of a task
 */
  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }
/**
 * Updates de state of the component
 * @param  item  as an object intance of a task in the state
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
/**
 * Deletes de state of the component
 * @param  item  as an object intance of a task in the state
 */
  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {


    return (
      <>
      <Navbar_I/>
      <TasksHero/>
      
      <Container className="container" style={{marginBottom: '20px'}}>
        <Row>
          <Col>
            <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> ¡DISFRUTA DE TUS PEQUEÑOS LOGROS!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TasksTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col className = 'd-flex justify-content-end'>
            <ModalForm buttonLabel="Añadir tarea" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
      <div className='row'>
        <Taskquote/>
      </div>
      <Footer/>
      </>
    )
  }
} export default agendaView;