import React, {Component} from 'react';
import axios from 'axios'
import AuthService from '../../Services/auth.service';
import all from '../Forms/all';
import 'font-awesome/css/font-awesome.min.css';

class MothEmotion extends Component{
    constructor(props){
        super(props);
        this.state={
            emotionMonth: '',
            iconE: ''
        };
            
    }
    
    
    componentDidMount(){
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.id;
        console.log(id)
        //Hacemos la llamada a axios para obtener la emocion predominante del mes
        axios.get(`https://emotionner.herokuapp.com/users/emotionOfTheMonth/${id}`)
        .then(res=>{ //luego 
            console.log(res);//console.log del resultado
            let array = res.data.ofTheMonth
            console.log(Array.isArray(array))
            var emotion =''
            if(array.length === 0){
                emotion =''
            } else{
                emotion = array[0].emotion; //guardamos el array de objetos devuelto
                
            }
            
            console.log(emotion)
            /**
             * Recibimos un ID y lo asociamos a la emocion
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

            console.log(icon)
           
            //lo guardamos todo en el estado
            this.setState({
               emotionMonth : emotionL,
               iconE : icon
            })
        
            console.log(icon)
        })
    }
    render(){
        return(
            <div className="card rounded">
            <div className="card-body">
            <h5 className="card-title">Este Mes te has sentido...</h5>
            <div><a  className=' d-flex justify-content-center' style={{fontSize: '10rem'}} ><i className={this.state.iconE}></i></a></div>
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

