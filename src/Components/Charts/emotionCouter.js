/**
 * Imports
 */
import React, {Component} from 'react';
import axios from 'axios'
import {Doughnut} from 'react-chartjs-2';
import AuthService from '../../Services/auth.service';

/**
 *  This class is the emotion Counter component, we can see the data of all the emotions that 
 * an user stored in the aplication. We used the ChartJS library.
 */

class ECountChart extends Component{

    constructor(props){
        super(props);
        //We pass the data through the state
        this.state={Data: {}};
            
    }
    /**
     *  We are updating the state of the component through componentDidMount()
     */
    componentDidMount(){
        //We need the current user and its id
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.id;
        /**
         * We get the data for the graphic through an axios get call
         */
        axios.get(`https://emotionner.herokuapp.com/users/emotionCounter/${id}`)
        .then(res=>{ //then
            const chartData = res.data.counter; //we store the data in an array
            let emotion =[] //we create the array for the emotion labels
            let count = []//and the array for the graph data info
            /**
             * Since the data base returns the emotions with their id we need to cast the id number to
             * the emotion
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
            //We store the info in our state
            this.setState({
                Data:{
                    labels: emotion, //Our labels are the emotions
                    datasets: [
                        {
                            label: 'Tu contador de emociones',
                            data: count, //Our info is the count 
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
            <div className="card rounded">
            <div className="card-body">
            <h5 className="card-title">Conoce tus estados de ánimo</h5>
            <h6 className="card-subtitle mb-2 text-muted">Conoce que emoción es más predominante en tu vida, basado en tus entradas diarias.</h6>
            <div className="chart-container" style={{position: "relative", height: " 60vh"}}>
                <Doughnut data={this.state.Data}  
                 options={{ maintainAspectRatio: false}} />    
            </div>
            </div>
            </div>
            
           
        )
    }
}
export default ECountChart



