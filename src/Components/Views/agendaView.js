import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../Forms/tasksModal'
import TasksTable from '../Elements/taskTable'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Footer from '../Elements/footerOutside'
import TasksHero from '../Elements/taskHero';
import Taskquote from '../Elements/taskQuote';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

/**
 * Agenda View where all agenda components are called
 */
class agendaView extends Component {
  state = {
    items: []
  }

  /**
   * GetItems()
   * @returns tasks in the database
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    console.log(id)
    //Axios call
    axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`)
        .then(response => {
          console.log('ANTES')
          console.log(response.data.tasks.tasks)
          let appointments = response.data.tasks.tasks;
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

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {

    const Example = (props) => {
      const [activeTab, setActiveTab] = useState('1');
    
      const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }

    };

    return (
      <>
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