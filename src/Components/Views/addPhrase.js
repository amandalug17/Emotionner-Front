import React, {Component} from 'react';
import Sidebar from '../Elements/sidebar';
import CreatePhrase from '../Forms/createPhrase';
import './../../App.css'

class addPhraseView extends Component{
    render(){
        return(
            <>
            <div className='blanco' style={{height:'100%'}}>
            <Sidebar/>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <CreatePhrase/>
                    </div>
                </div>
            </div>
            </div>
        </>
        )
    }
 


} export default addPhraseView