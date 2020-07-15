import React, {Component} from 'react';
import axios from 'axios'
import AuthService from '../../Services/auth.service';
import all from '../Forms/all';

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
            const emotion = res.data.ofTheMonth[0].emotion; //guardamos el array de objetos devuelto
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
               emotionMonth : emotionL
            })
        
            console.log(icon)
        })
    }
    render(){
        return(
            <div className="card rounded">
            <div className="card-body">
            <h5 className="card-title">Este Mes te haz sentido...</h5>
            <h3>{this.state.emotionMonth}</h3>
            <div><a  className=' d-flex justify-content-center' ><i className={this.state.iconE }></i></a></div>
            <br/>
            <h6 className="card-subtitle mb-2 text-muted">Conoce que emoción es más predominante en tu vida, basado en tus entradas diarias.</h6>
           
            </div>
            </div>
            
           
        )
    }
}
export default MothEmotion



