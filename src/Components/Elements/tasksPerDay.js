import React, { Component, useState} from 'react'
import { Container, Row, Col, Label } from 'reactstrap'
import AuthService from '../../Services/auth.service'
import axios from 'axios'
import './../../App.css'
import {Line} from 'react-chartjs-2';



class TasksPerDay extends Component {

    constructor(props){
        super(props);
        this.state={Data: {}};      
    }
    componentDidMount(){
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.id;
        //Hacemos la llamada a axios para obtener las emociones registradas de un usuario
        axios.get(`https://emotionner.herokuapp.com/users/tasksPerDay/${id}`)
        .then(res=>{ //luego 
            console.log(res);//console.log del resultado
            const chartData = res.data.tasksPerDay; //guardamos el array de objetos devuelto
            let days =[] //creamos los arrays para las labels, es decir los dias
            let count = []//y el array de la data, es decir la cuenta de las tareas completadas por día
            /**
             * Por cada record que me responde mi llamada axios voy a guardar los datos en su array correspondiente
             */
            chartData.forEach(record=>{
                days.push(record.date)
                count.push(record.count)
            });
            //lo guardamos todo en el estado
            this.setState({
                Data:{
                    labels: days,
                    datasets: [
                        {
                            label: 'Tus tareas completadas',
                            data: count,
                            backgroundColor: [  
                                "#3cb371",  
                                "#0000FF",  
                                "#9966FF",  
                                "#4C4CFF",  
                                "#00FFFF",  
                                "#f990a7",  
                                "#aad2ed",  
                                "#FF00FF",  
                                "Blue",  
                                "Red"  
                            ] 
                        }
                    ]
                }
            })
        })
    }
    
    render() {
        return (
            <>
           
            </>
        )
    }

}
export default TasksPerDay; 