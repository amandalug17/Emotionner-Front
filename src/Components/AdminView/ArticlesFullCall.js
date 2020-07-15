import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import ArticleTable from './articleTableFull';
import axios from 'axios'
import './../../App.css'

/**
 * We call all the articles in here
 */
class Article extends Component {
  state = {
    items: []
  }


  /**
   * GetItems()
   * @returns articles 
   */

  getItems(){

      /**
       * We fetch all the articles
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

  componentDidMount(){
    this.getItems()
  }

  render() {

    return (
      <>
      <Container className="container">
        <Row>
          <Col>
            <ArticleTable items={this.state.items}/>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
} export default Article;