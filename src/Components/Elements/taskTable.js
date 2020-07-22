/**
 *  Imports
 */
import React, { Component } from 'react'
import { Table} from 'reactstrap';
import ModalForm from '../Forms/tasksModal'
import './../../App.css'
import moment from 'moment';
// React Notification
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


/**
 * This is the task table component
 */

class TaskTable extends Component {

  state = {
    id: '',
    title: '', 
    description: '',
    completed: '', 
    start: '', 
    end: '', 
    time: '',
    enabled: '',
    userId: ''
}

/**
 * This is the function to do the logic elimination of a task, we update the property enableled of the task
 * if it is false we won't show the task in the front
 * @param item  as an object instance of a task
 */
  deleteItem = item => {
    //First we ask for a confirmation to delete the task
    let confirmDelete = window.confirm('¿Quiere eliminar esta tarea? Esta acción no se puede deshacer')
    //If it's true we delete the task 
    if(confirmDelete){
      //We change the value of enable to 0 meaning its false
      let data={
        id: item.id,
        title: item.title,
        description: item.description,
        completed: false,
        start: item.start,
        end: item.start,
        time: item.time, 
        enabled: 0
      }
      
      //Then we do a PUT or UPDATE call the database passing the new task information
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(item => {
          //Then we update the view
          window.location.reload()
        })
        .catch(err => console.log(err)) 
    }

  }
/**
 * This is the function to do the logic to change the completation status of a task, we update the property completed of the task
 * if it is false we blur the task in the view
 * @param item  as an object instance of a task
 */
  completeTask= item => {
    //We change the value of completed to the opposite value
     var itemStatus = !item.completed;
      let data={
        id: item.id,
        title: item.title,
        description: item.description,
        completed: itemStatus,
        start: item.start,
        end: item.start,
        time: item.time, 
        enabled: 1
      }
      
       //Then we do a PUT or UPDATE call the database passing the new task information
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(item => {
          window.location.reload()
        })
        .catch(err => console.log(err)) 

  }

  
 


  render() {

    let date = moment(moment.now()).format("YYYY-MM-DD")
    /**
     * We iterate across the items or tasks and we show them in the table to show the notification
     * were the task date match the current date
     */
    const items = this.props.items.map(item => {
      if(`${item.start}`=== date && item.enabled === 1 && item.completed === false){
          NotificationManager.info('Para hoy tienes planeado: '+ `${item.title}`, 'Recuerda tu tarea!', 80000);
      }
      return (
        <tr className = {item.completed ? "td-completed" : ""}key={item.id}>
          <td ><div className ="completed" ><a  onClick={() => this.completeTask(item)} title='Marcar como completado'>{item.completed ? <i className="far fa-check-square marked" ></i> :<i className="far fa-square marked" ></i>}</a></div></td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.start}</td>
          <td>{item.time}</td>
          <td>
              <ModalForm buttonLabel= {!item.completed ? "Editar" : " "} item={item} updateState={this.props.updateState}/>
          </td>
          <td>
          <div className = "buttonArrow">
              <a className="link" style={{textTransform: 'uppercase'}} onClick={() => this.deleteItem(item)} title='Eliminar'>Eliminar</a>
          </div>
          </td>
        </tr>
        )
      })

    return (
      <>
      <Table bordered responsive hover style={{backgroundColor:'#fff'}}>
        <thead>
          <tr>
            <th style={{width: '5%'}}></th>
            <th>Tarea</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th style={{width: '15%'}}></th>
            <th style={{width: '15%'}}></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
      <NotificationContainer/>
      </>
    )
  }
}

export default TaskTable