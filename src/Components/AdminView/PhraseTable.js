import React, { Component } from 'react'
import { Table} from 'reactstrap';
import './../../App.css'
import moment from 'moment'
import ModalForm from './PhraseModal'


/**
 * Phrase TABLE!!
 */

class PhraseTable extends Component {

  state = {
    phrase:'', 
    createdAt: ''
}

  render() {

    /**
     * We iterate across the items or phrases and we show them in the table
     */
    const items = this.props.items.slice(0, 2).map(item => {

        var fecha = moment(item.createdAt).format('DD-MM-YYYY');

      return (
        <tr className = {item.completed ? "td-completed" : ""}key={item.id}>
          <td>{item.phrase}</td>
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
            <th>Frase</th>
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

export default PhraseTable