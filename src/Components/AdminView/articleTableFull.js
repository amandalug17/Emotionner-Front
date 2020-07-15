import React, { Component } from 'react'
import { Table} from 'reactstrap';
import './../../App.css'
import moment from 'moment'
import ModalForm from './ArticleModal'


/**
 * Articles TABLE!!
 */

class TaskTable extends Component {

  state = {
    title: '', 
    autor: '',
    UpdatedAt: ''
}

  render() {

    /**
     * We iterate across the items or tasks and we show them in the table
     */
    const items = this.props.items.map(item => {

        var fecha = moment(item.createdAt).format('DD-MM-YYYY');

      return (
        <tr className = {item.completed ? "td-completed" : ""}key={item.id}>
          <td>{item.title}</td>
          <td>{item.author}</td>
          <td>{fecha}</td>
          <td>
            <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
          </td>
        </tr>
        )
      })

    return (
      <>
      <Table bordered responsive hover style={{backgroundColor:'#fff'}}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Fecha de creación</th>
            <th style={{width: '20%'}}></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
      </>
    )
  }
}

export default TaskTable