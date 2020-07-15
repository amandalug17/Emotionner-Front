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
            
            var emotionL = ''
            if(emotion=== 1){
                emotionL = 'INCREIBLE'
                
            }else if(emotion=== 11){
                emotionL = 'BIEN'
                
            }else if(emotion=== 21){
                emotionL = 'TRISTE'
               
               
            }else if(emotion=== 31){
                emotionL = 'ENOJADO'
                
            }else if(emotion=== 41){
                emotionL = 'ANSIOSO'
                
            }else if (emotion=== 51) {
                emotionL = 'ESTRESADO'
               
            }

            
           
            //lo guardamos todo en el estado
            this.setState({
               emotionMonth : emotionL,
               iconE: emotion
            })
        
           
        })
    }
    render(){
        return(
            <div className="card rounded">
            <div className="card-body">
            <h5 className="card-title">Este Mes te haz sentido...</h5>
            <h3 className={this.state.iconE ===21? "emocionT" : "emocionMes"}>{this.state.emotionMonth}</h3>
            <div><a  className=' d-flex justify-content-center' >
                {
                this.state.iconE ===1 ? <i className="increible far fa-grin-stars"></i>:
                this.state.emotionMonth ==='TRISTE'? <i className="bien far fa-smile"></i>:
                this.state.iconE ===21 ? <i className="triste far fa-sad-tear"></i>:
                this.state.iconE ===31 ? <i className="enojado far fa-angry"></i>:
                this.state.iconE ===41 ? <i className="ansioso far fa-grimace"></i>:
                <i className="estresado far fa-tired"></i>
                }
               

                </a></div>
            <br/>
            <h6 className="card-subtitle mb-2 text-muted">Conoce que emoción es más predominante en tu vida, basado en tus entradas diarias.</h6>
           
            </div>
            </div>
            
           
        )
    }
}
export default MothEmotion



