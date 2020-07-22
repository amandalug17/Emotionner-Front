import React, { Component } from 'react'
import { Table} from 'reactstrap';
import ModalFormE from '../Forms/emotionsModal';
import all from '../Forms/all';
import './../../App.css'


/**
 * This class renders the emotions table
 */

class EmotionsTable extends Component {

   /**
    * We recive an id so we need to asign a value to the variable
    * @param item 
    */
   setMood (item){
       var mood = ''
    if(item === 1){
        mood ='Increible'
    }else if(item === 11){
        mood ='Bien'
    }else if(item === 21){
      mood = 'Triste'
    }else if(item === 31){
      mood= 'Enojado'
     }else if(item === 41){
         mood ='Ansioso'
     }else{
          mood ='Estresado'
     }
     return mood.toUpperCase()
   }

   /**
    * Function to assing the icon to the table
    * @param item as a string
    * @returns icon as a string
    */
   setIcon (item){
        var icon = ''
        if(item === 1){
            icon ="increible far fa-grin-stars"
        }else if(item === 11){
            icon ="bien far fa-smile"
        }else if(item === 21){
            icon = "triste far fa-sad-tear"
        }else if(item === 31){
            icon= "enojado far fa-angry"
        }else if(item === 41){
            icon ="ansioso far fa-grimace"
        }else{
            icon ="estresado far fa-tired"
        }
        return icon
    }
    /**
     * We cast the date to a YY-MM-DD string date
     * @param item as a string
     */
    toDate(item){
        var date= new Date(item)
        var fecha = date.toLocaleString('es');
        return fecha.toString()
    }

  render() {
      
    /**
     * We iterate across the items or tasks and we show them in the table
     */
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td><a  className=' d-flex justify-content-center'  role="button" ><i className={this.setIcon(item.emotion_id)}></i></a>
          <p className='text-center'>{this.setMood(item.emotion_id)}</p>
          </td>
          <td>{item.description}</td>
          <td>{this.toDate(item.createdAt)}</td>
          <td>
              <ModalFormE buttonLabel="Editar" item={item} updateState={this.props.updateState}/>
          </td>
        </tr>
        )
      })

    return (
      <Table bordered responsive hover style={{backgroundColor:'#fff'}}>
        <thead>
          <tr>
            <th>Mood</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th  style={{width: '15%'}}></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default EmotionsTable