import React, { Component} from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './toolbar';
import axios from 'axios';
import AuthService from '../../Services/auth.service';
// React Notification
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import emailjs from 'emailjs-com';
require('moment/locale/es.js');


moment.locale('es');
const localizer = momentLocalizer(moment);

class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        //State is updated via componentDidMount
      ],
      
    }
    
    }
    convertDate = (date) => {
      return moment.utc(date).toDate()
    }

    
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
      const id = currentUser.id;
      console.log(id);
      axios.get(`https://emotionner.herokuapp.com/users/tasks/${id}`)
        .then(response => {
          let aux = response.data.tasks.tasks;
          //We filter through enabled tasks only
          let appointments = aux.filter(x => x.enabled === 1)
          for (let i = 0; i < appointments.length; i++) {
            //Convertimos a formato date
            appointments[i].start = this.convertDate(appointments[i].start) 
            var dias = 1; // Número de días a agregar
            appointments[i].start.setDate(appointments[i].start.getDate() + dias);
            appointments[i].end = this.convertDate(appointments[i].end)
            appointments[i].end.setDate(appointments[i].end.getDate() + dias);
            
          }
          console.log('DESPUES')
          console.log(appointments);
          this.setState({
            tasks:appointments
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  render() {

    const { tasks } = this.state

    let date = moment(moment.now()).format("YYYY-MM-DD")

    for (let i = 0; i < tasks.length; i++) {
      if(moment(tasks[i].start).format("YYYY-MM-DD") == date){
        NotificationManager.info('Para hoy tienes planeado: '+ tasks[i].title, 'Recuerda tu tarea!', 80000);
        let taskTitle = tasks[i].title;
        const currentUser = AuthService.getCurrentUser();
        const email = currentUser.email;
        console.log(email)
        emailjs.send(
          'gmailemotionner', // default email provider in your EmailJS account
          'task',
          {
            email,
            taskTitle
          },
          'user_L2gOmwmvGOO2fSQcOzgdn'
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
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
        />
      <NotificationContainer/>
        </div>
    );
  }
}

export default Calendario