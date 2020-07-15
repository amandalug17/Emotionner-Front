import React, { Component} from 'react'
import Footer from '../Elements/footerInside'
import MothEmotion from '../Charts/monthEmotion'
import TasksPerDay from '../Charts/tasksPerDay';
import StatsHero from '../Elements/statsHero';
import './../../App.css'
import  ECountChart from '../Charts/emotionCouter';
import Navbar_I from "../Elements/navbar";

class StatsView extends Component {
  
    render() {
  
      return (
        <>
        <Navbar_I/>
        <StatsHero/>
        <br/>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'40px', fontFamily:'Montserrat'}}> Emoción del mes</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                   <MothEmotion />
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