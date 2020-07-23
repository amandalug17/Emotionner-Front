import  {Form, FormGroup, Label, Input} from 'reactstrap';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import './../../App.css'
import Footer from "../Elements/footerOutside";
import AuthService  from "./../../Services/auth.service";
/**
 * Login admin componet 
 */
class LoginAdminForm extends Component{
   
    constructor(props) {
        super(props)
       
        this.state = {
            username : '',
            campPassword: '' ,
            redirect: false 
        }
        
    }
    /**
     * Handle change made in the form
     * @param {*} e as a event 
     */
    handleChange = (e) => {
        const {name, value}= e.target;
        this.setState({... this.state, [name]: value });
    }
    /**
     * Singin method, when the user clicks the button on the form 
     */
    singIn(){
        /**
         * Validations
         */
        if (this.state.username==="") {
            alert("Introduzca su usuario")
          }
        else if (this.state.campPassword==="") {
              alert("La contraseña ingresada no es valida")
        } else {//If the info is valid
            //We call the authService function to validate the data
            AuthService.loginA( this.state.username, this.state.campPassword).then(
                () => { // if is valid
                    this.redirect(); // we redirect the user
                },
                (error) => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
                  alert(resMessage);
                }
              );
            
        }
    }
    /**
     * Function to redirect to the admin view
     */
    redirect(){
            var link = window.location.href+'/dashboard';
            console.log (link);
            return window.location.replace(link)
    }
    render(){
        return(
            <>
            <div className="blanco">
            <div className= 'row '>
                <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                    <div className='card card-signin my-5'>
                        <div className='card-body'>
                        <div className='form-icon'>
                            <span ><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                           <h5 className='card-title text-center text-uppercase'>Bienvenido Administrador</h5>
                           <Form className='form-singin'>
                                <FormGroup>
                                    <Label className="art-label">Email</Label>
                                    <Input className='form-control' type="email" value={this.state.username} onChange={(value)=> this.setState({username:value.target.value})}  placeholder="Introduzca su usuario "></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="art-label">Contraseña</Label>
                                    <Input className='form-control' type="password"  value={this.state.campPassword} onChange={(value)=> this.setState({campPassword:value.target.value})} placeholder="Introduzca su contraseña" required></Input>
                                </FormGroup>
                                <div style={{margin: '20px'}}>
                                <button type='button' className="btn btn-lg btn-block text-uppercase btn-light"  onClick={()=>this.singIn()}>Iniciar Sesión</button>
                                </div>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
            )
        
    }
    
}
export default LoginAdminForm;