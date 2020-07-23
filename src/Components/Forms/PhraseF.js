/**
 * Imports
 */
import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import Phrases from '../Elements/phrases';
import './../../App.css'

/**
 * We call all the phrases in here
 */
class PhraseView extends Component {
  state = {
    items: []
  }

  /**
   * GetItems()
   * @returns a phrase in the database based in the last registered emotion that the user registered in the page
   */

  /**
   * GetItems()
   * @returns articles in the database based in the last registered emotion that the user registered in the page
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    
    /**
     * First we return the last emotion that the user registered 
     */
    axios.get(`https://emotionner.herokuapp.com/users/getLastEmotion/${id}`)
    .then(response => {
      var emotionArray = response.data.emotion
      
      /**
       * Then we do another axios call to get all the articles that match the emotion id
       * if the user has registered an emotion we only fetch the articles that are linked to thar emotion
       * else we fetch all the articles.
       */
      if (Array.isArray(emotionArray) && emotionArray.length) {
        console.log('entra')
        console.log(emotionArray)
        var emotionid = response.data.emotion[0].emotion_id
        var id2 = parseInt(emotionid)
        axios.get(`https://emotionner.herokuapp.com/phrases/selectPhrase/${id2}`)
        .then(response => {
          let phrases = response.data.phrase;
          this.setState({
            items : phrases
           })
        }).catch(function (error) {
          console.log(error);
        });

      }else { //else
        /**
         * We dont return a phrase
         */
        let phrases = [];
        this.setState({
                items : phrases
        })
        
      }
     
    }). catch(function (error) {
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
            <Phrases items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default PhraseView;