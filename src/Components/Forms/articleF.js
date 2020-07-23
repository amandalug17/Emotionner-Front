/**
 * Imports
 */
import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import AddCards from '../Forms/articleCard';
import './../../App.css'

/**
 * We call all the articles in here
 */
class ArticleView extends Component {
  state = {
    items: []
  }


  /**
   * GetItems()
   * @returns articles in the database based in the last registered emotion that the user registered in the page
   */

  getItems(){
    const currentUser = AuthService.getCurrentUser();
    const id = currentUser.id;
    var emotionid = ''
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
        var emotionid = response.data.emotion[0].emotion_id
        var id2 = parseInt(emotionid)
        axios.get(`https://emotionner.herokuapp.com/articles/selectArticle/${id2}`)
        .then(response => {
          let articles = response.data.article;
          this.setState({
              items : articles
          })
        }).catch(function (error) {
          console.log(error);
        });

      }else { //else
        /**
         * We validate that we reciving an array from the bd
         */
        axios.get(`https://emotionner.herokuapp.com/articles/findAll`)
          .then(response => {
            let resArray = response.data;
            if(Array.isArray(resArray) && resArray.length){
              let articles = response.data;
              this.setState({
                items : articles
            })
            }else {
              //If we recive a null object because we dont have articles in our bd the array will be null
              let articles = [];
              this.setState({
                items : articles
            })
            }
          }).catch(function (error) {
            console.log(error);
          });
        
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
            <AddCards items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default ArticleView;