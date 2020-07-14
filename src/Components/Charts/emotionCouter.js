import React, {Component} from 'react';
import axios from 'axios'
import {Bar} from 'react-chartjs-2';
import AuthService from '../../Services/auth.service';

class ECountChart extends Component{
    constructor(props){
        super(props);
        this.state={Data: {}};
            
    }
    componentDidMount(){
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.id;
        //Hacemos la llamada a axios para obtener las emociones registradas de un usuario
        axios.get(`https://emotionner.herokuapp.com/users/emotionCounter/${id}`)
        .then(res=>{ //luego 
            console.log(res);//console.log del resultado
            const chartData = res.data.counter; //guardamos el array de objetos devuelto
            let emotion =[] //creamos los arrays para las labels, es decir las emociones
            let count = []//y el array de la data, es decir la cuenta de las veces que ha estado esa emocion
            /**
             * Por cada record que me responde mi llamada axios voy a guardar los datos en su array correspondiente
             */
            chartData.forEach(record=>{
                emotion.push(record.emotion)
                count.push(record.counter)
            });
            //lo guardamos todo en el estado
            this.setState({
                Data:{
                    labels: emotion,
                    datasets: [
                        {
                            label: 'Tu contador de emociones',
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
    render(){
        return(
            
            <div class="chart-container" style={{position: "relative", height: " 60vh", width:"60vw"}}>
                <Bar data={this.state.Data}  
                 options={{ maintainAspectRatio: false}} />    
            </div>
        )
    }
}
export default ECountChart



