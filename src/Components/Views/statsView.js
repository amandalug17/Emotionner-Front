import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Elements/footerInside'
import OfTheMonth from '../Elements/ofTheMonth';
import TasksPerDay from '../Elements/tasksPerDay';
import EmotionCounter from '../Elements/emotionCounter';
import StatsHero from '../Elements/statsHero';
import './../../App.css'

class StatsView extends Component {
  
    render() {
  
      return (
        <>
        <StatsHero/>
        <Container>
            <Row> 
                <Col>
                    <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'40px', fontFamily:'Montserrat'}}> Emoción del mes</h1>
                </Col>
            </Row>
            <Row>
                <OfTheMonth/>
            </Row>
            <Row>
                <EmotionCounter/>
            </Row>
            <Row>
                <TasksPerDay/>
            </Row>
        </Container>
        <Footer/>
        </>
      )
    }
  } export default StatsView;