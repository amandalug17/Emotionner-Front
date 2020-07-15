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
            <div className='row justify-content-center'> 
                <div className= 'col' >
                    <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'40px', fontFamily:'Montserrat'}}> Emoción del mes</h1>
                </div>
            </div>
            <div className='row justify-content-center'> 
                <div className= 'col' style={{backgroundColor: '#ffff'}}>
                    <TasksPerDay/>
                </div>
            </div>
           
        </Container>
        <Footer/>
        </>
      )
    }
  } export default StatsView;