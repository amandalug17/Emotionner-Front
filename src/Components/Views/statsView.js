/**
 * Imports
 */
import React, { Component} from 'react'
import Footer from '../Elements/footerInside'
import MothEmotion from '../Charts/monthEmotion'
import TasksPerDay from '../Charts/tasksPerDay';
import StatsHero from '../Elements/statsHero';
import './../../App.css'
import  ECountChart from '../Charts/emotionCouter';
import Navbar_I from "../Elements/navbar";

/**
 * This class renders the statistics views, we render the charts in this view.
 */

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