import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import PhraseTableFull from './PhraseTableFull'
import axios from 'axios'
import './../../App.css'

/**
 * We call all the phrases in here
 */
class PhraseCallFull extends Component {
  state = {
    items: []
  }


  /**
   * GetItems()
   * @returns phrases 
   */

  getItems(){

      /**
       * We fetch all the phrases
       */
        axios.get(`https://emotionner.herokuapp.com/phrases/findAll`)
          .then(response => {
            let resArray = response.data;
            if(Array.isArray(resArray) && resArray.length){
              let articles = response.data;
              this.setState({
                items : articles
            })
            }else {
              //If we recive a null object because we dont have phrases in our bd the array will be null
              let articles = [];
              this.setState({
                items : articles
            })
            }
          }).catch(function (error) {
            console.log(error);
          });
  }

  componentDidMount(){
    this.getItems()
  }

  render() {

    return (
      <>
      <Container className="container">
        <Row>
          <Col>
            <PhraseTableFull items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default PhraseCallFull;