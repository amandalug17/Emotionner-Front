import React from 'react';
import Calendario from '../Elements/calendar';
import Footer from '../Elements/footerInside'
import './../../App.css'
import Navbar_I from "../Elements/navbar";




const CalendarView = () =>{
    
        return(
            <>
            <Navbar_I/>
            <div className='container'>
                <div className ='row'>
                    <div className='col-1'>
                    </div>
                    <div className ='col-4' style={{paddingTop:'25px'}}>
                        <div className = 'buttonArrow'>
                            <a className="link" href="/agenda" style={{textTransform: 'uppercase'}}>Nueva Tarea</a>
                        </div>
                    </div>
                    <div className='col-1'>
                        
                    </div>
                    <div className ='col-5' style={{paddingTop:'25px'}}>
                        <div className = 'buttonArrow fit-to-content'>
                            <a className="link" href="/mood" style={{textTransform: 'uppercase'}}>¿CÓMO TE SIENTES HOY?</a>
                        </div>
                    </div>
                    <div className='col-1'>
                        
                    </div>
                </div>
                <div className ='row'>
                    <Calendario/>
                </div>
            </div>
            <Footer/>
        </>
        );

};
export default CalendarView