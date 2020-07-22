import React from 'react';
import './../../App.css'
/**
 * This is a hero component
 */
const TasksHero = () => {

    return (
      <>
      <div className="hero-nav-task">
        <div className="hero-nav__inner">
                <h1 style={{fontWeight:'lighter'}}>Mi Agenda</h1>
                <div className="hero-nav__button">
                <a className="btn"></a>
                </div>
            </div>
        </div>
      </>
    );
  }; export default TasksHero;