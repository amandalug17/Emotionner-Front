import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Elements/footerInside';
import MonthEmotion from '../Charts/monthEmotion'
import TasksPerDay from '../Charts/tasksPerDay';
import StatsHero from '../Elements/statsHero';
import './../../App.css'
import  ECountChart from '../Charts/emotionCouter';

class StatsView extends Component {
  
    render() {
  
      return (
        <>
        <StatsHero/>
        <br/>
        <div className='container'>
           <div className='row'>
                <div className='col'>
                   <MonthEmotion />
                </div>
            </div>
            <br/>
            <div className='row justify-content-center'>
                <div className='col'>
                < ECountChart />
                </div>
            </div>
            <br/>
            <div className='row justify-content-center'>
                <div className='col'>
                <TasksPerDay/>
                </div>
            </div>
             
        </div>
        <br/>
        <Footer/>
        </>
      )
    }
  } export default StatsView;