/**
 * Imports
 */
import React, { Component } from 'react'
import './../../App.css'

/**
 * This class renders the phrase component
 */
class Phrases extends Component {


  render() {
    
    const items = this.props.items.map(item => {
    return (
        <section key={item.id} className="quotes">
        <div className="bubble">
            <blockquote>{item.phrase}</blockquote>
            <div></div>
            <cite></cite> </div>
    </section>
    )
    })

  return(
      <div className='container'>
          {items}
      </div>

  )

  }
}
export default Phrases