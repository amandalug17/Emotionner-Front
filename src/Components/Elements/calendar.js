/**
 * Imports
 */
import React, { Component} from 'react';
//React Big Calendar Library
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
//Authentication
import axios from 'axios';
import AuthService from '../../Services/auth.service';
// React Notification
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import './../../App.css'
require('moment/locale/es.js');


//We use moment locale library to manage the time in the calendar
moment.locale('es');
const localizer = momentLocalizer(moment);
/**
 * This class renders the calendar component
 * we use Ract Big Calendar library for the calendar
 */
class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        //State is updated via componentDidMount
      ],
      
    }
    
    }
    /**
     * We use this function to convert the date in a format that the calendar needs to display it
     * @param date as a date as a string
     * @returns a date converted
     */
    convertDate = (date) => {
      return moment.utc(date).toDate()
    }

    /**
     * We use componentDidMount() to render the task that we get from the database
     */
    componentDidMount() {
      //We get the current user
      const currentUser = AuthService.getCurrentUser();
      //Then we get its id
      const id = currentUser.id;
      //We make the axios call
      axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`)
        .then(response => {
          let aux = response.data.tasks.tasks;
          //We filter through enabled tasks only
          let appointments = aux.filter(x => x.enabled === 1)
          for (let i = 0; i < appointments.length; i++) {
            //We convert each date that the database returns as a string to a date 
            appointments[i].start = this.convertDate(appointments[i].start) 
            var dias = 1; // Number of days to add
            appointments[i].start.setDate(appointments[i].start.getDate() + dias);
            appointments[i].end = this.convertDate(appointments[i].end)
            appointments[i].end.setDate(appointments[i].end.getDate() + dias);
            
          }
          //Then we update the state with the task in the database
          this.setState({
            tasks:appointments
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  render() {
    /**
     * Here we desplay the notifications 
     */
    //We get the tasks in the state
    const { tasks } = this.state
    //We get the current date
    let date = moment(moment.now()).format("YYYY-MM-DD")
    //We show the notification if the task date match the current date
    for (let i = 0; i < tasks.length; i++) {
      if(moment(tasks[i].start).format("YYYY-MM-DD") === date && tasks[i].enabled === 1 && tasks[i].completed === false){
            NotificationManager.info('Para hoy tienes planeado: '+ tasks[i].title, 'Recuerda tu tarea!', 80000);
      }
    }

    return (
        <div className="calendar-container">
          <Calendar
            popup
            selectable
            localizer={localizer}
            events={tasks}
            defaultView={Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            onSelectEvent={event => alert('Tarea: '+ event.title + '\n'+ 'Descripcion: '+ event.description)}
            components = {{toolbar : CalendarToolbar}}
            onSelectSlot={this.handleSelect}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
            defaultDate={new Date()}
            eventPropGetter={
              (event) => {
                let newStyle = {
                  backgroundColor: "#d7ade996",
                  color: 'black',
                  borderRadius: "0px",
                  border: "none"
                };
          
                if (event.completed){
                  newStyle.backgroundColor = "#EFE7F3"
                }
          
                return {
                  className: "",
                  style: newStyle
                };
              }
            }
        />
      <NotificationContainer/>
        </div>
    );
  }
}

export default Calendario