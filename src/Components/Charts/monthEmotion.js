/**
 * Imports
 */
import React, {Component} from 'react';
import axios from 'axios'
import AuthService from '../../Services/auth.service';
/**
 *  This class is the emotion of the month component, we can see the data of all the emotions that 
 * an user stored in the aplication. We used the ChartJS library.
 */

class MothEmotion extends Component{
    constructor(props){
        super(props);
        //We pass the data through the state
        this.state={
            emotionMonth: '',
            iconE: ''
        };
            
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
        axios.get(`https://emotionner.herokuapp.com/users/emotionOfTheMonth/${id}`)
        .then(res=>{ //Then
            let array = res.data.ofTheMonth
            var emotion =''
            /**
             * We recive an array from the backend, if the array lenght is 0 
             * we are reciving an empty array so the user has not entered an emotion 
             * that month. Else we get the first element in the array.
             */
            if(array.length === 0){
                emotion =''
            } else{
                emotion = array[0].emotion; 
                
            }
            /**
             * Since the data base returns the emotions with their id we need to cast the id number to
             * the emotion
             */
            var icon = ''
            var emotionL = ''
            if(emotion=== 1){
                emotionL = 'INCREIBLE'
                icon ="increible far fa-grin-stars"
            }else if(emotion=== 11){
                emotionL = 'BIEN'
                icon ="bien far fa-smile"
            }else if(emotion=== 21){
                emotionL = 'TRISTE'
                icon = "triste far fa-sad-tear"
                console.log(icon)
            }else if(emotion=== 31){
                emotionL = 'ENOJADO'
                icon= "enojado far fa-angry"
            }else if(emotion=== 41){
                emotionL = 'ANSIOSO'
                icon ="ansioso far fa-grimace"
            }else if (emotion=== 51) {
                emotionL = 'ESTRESADO'
                icon ="estresado far fa-tired"
            }

          
           
           //We store the info in our state
            this.setState({
               emotionMonth : emotionL,
               iconE : icon
            })
        
            
        })
    }
    render(){
        return(
            <div className="card rounded">
            <div className="card-body">
            <h5 className="card-title">Este Mes te has sentido...</h5>
            <br/>
            <h3 className={
                this.state.emotionMonth === 'INCREIBLE' ? "emotionI" :
                this.state.emotionMonth === 'BIEN' ? "emotionB" :
                this.state.emotionMonth === 'TRISTE' ? "emotionT" :
                this.state.emotionMonth === 'ENOJADO' ? "emotionE" :
                this.state.emotionMonth === 'ANSIOSO' ? "emotionA" :
                this.state.emotionMonth === 'ESTRESADO' ? "emotionEs" :
                " "
                
            }>{this.state.emotionMonth}</h3>
            <br/>
            <div className=' d-flex justify-content-center'>
                <h6 className="card-subtitle mb-2 text-muted">{
                this.state.emotionMonth === 'INCREIBLE' ? "¡Estás teniendo una muy buena racha este mes! Sigue así." :
                this.state.emotionMonth === 'BIEN' ? "¡Cada día es una oportunidad para sentirse mucho mejor, sigue así!" :
                this.state.emotionMonth === 'TRISTE' ? "¿Estás teniendo un mes difícil?. No te preocupes siempre hay luz al final del tunel" :
                this.state.emotionMonth === 'ENOJADO' ? "Deja de lado aquellas cosas que solo te traen disgustos" :
                this.state.emotionMonth === 'ANSIOSO' ? "Es importante aprender a manejar tu ansiedad, busca un hobbie que te guste o relajate unos minutos." :
                this.state.emotionMonth === 'ESTRESADO' ? "Es importante controlar los niveles de estrés por tu salud. No te procupes que todo saldra bien!":
                "¿Eres nuevo?. Ingresa una emoción para conocer tus estadisticas"

            }</h6></div>
            
           
            </div>
            </div>
            
           
        )
    }
}
export default MothEmotion

