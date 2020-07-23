/**
 * Imports
 */
import React, {Component} from 'react';
import ModalInfo from '../Forms/articleModal';
import './../../App.css'

/**
 * Form for CRUD operations in Tasks table
 */

class AddCards extends Component {
dd
    render() {
      const items = this.props.items.map(item => {
      return (
        <div className="blog-card" key={item.id}>
            <div className="meta">
            <div className="photo" style={{backgroundImage:'url('+`${item.image}`+')'}}></div>
            <ul className="details">
                <li className="author"><a>{item.author}</a></li>
                <li className="tags">
                <ul>
                    <li><a >{item.emotionId}</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <div className="description">
            <h1>{item.title}</h1>
            <h2>{item.author}</h2>
            <p>{item.description}</p>
            <ModalInfo buttonLabel="read-more" item={item}/>
            </div>
        </div>
      )
      });

      return(
        <div className='container'>
            {items}
        </div>
      )
    }
  } export default AddCards