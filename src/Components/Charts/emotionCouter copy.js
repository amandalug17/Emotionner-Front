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
            var emotionL = ''
            chartData.forEach(record=>{
                if(record.emotion=== 1){
                    emotionL = 'INCREIBLE'
                }else if(record.emotion=== 11){
                    emotionL = 'BIEN'
                }else if(record.emotion=== 21){
                    emotionL = 'TRISTE'
                }else if(record.emotion=== 31){
                    emotionL = 'ENOJADO'
                }else if(record.emotion=== 41){
                    emotionL = 'ANSIOSO'
                }else{
                    emotionL = 'ESTRESADO'
                }
                emotion.push(emotionL)
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
                                "rgba(120, 190, 236, 0.6)",
                                "rgba(61, 221, 69, 0.6)",
                                "rgba(252, 217, 62, 0.6)",
                                "rgba(243, 74, 74, 0.6)",
                                "rgba(247, 99, 155, 0.6)", 
                                "rgba(241, 134, 46, 0.6)"
                            ] 
                        }
                    ]
                }
            })
        })
    }
    render(){
        return(
            <div class="card rounded">
            <div class="card-body">
            <h5 class="card-title">Conoce tus estados de ánimo</h5>
            <h6 class="card-subtitle mb-2 text-muted">Conoce que emoción es más predominante en tu vida, basado en tus entradas diarias.</h6>
            <div class="chart-container" style={{position: "relative", height: " 60vh"}}>
                <Bar data={this.state.Data}  
                 options={{ maintainAspectRatio: false}} />    
            </div>
            </div>
            </div>
            
           
        )
    }
}
export default ECountChart



