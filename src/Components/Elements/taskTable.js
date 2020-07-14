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
 * TASKS TABLE!!
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


  deleteItem = item => {
    let confirmDelete = window.confirm('¿Quiere eliminar esta tarea? Esta acción no se puede deshacer')
    if(confirmDelete){
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
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
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

  }

  completeTask= item => {
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
      console.log(data)
      
      fetch(`https://emotionner.herokuapp.com/users/updateTask`, {
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

  
 


  render() {

    let date = moment(moment.now()).format("YYYY-MM-DD")
    /**
     * We iterate across the items or tasks and we show them in the table
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