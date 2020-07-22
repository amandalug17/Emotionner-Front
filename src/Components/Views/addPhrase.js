/**
 * Imports
 */
//React library
import React, {Component} from 'react';
//Sidebar component
import Sidebar from '../Elements/sidebar';
//Create phrase component
import CreatePhrase from '../Forms/createPhrase';
//App css file
import './../../App.css'

/**
 * This class renders the view for the component to create an phrase in the
 * administartor view.
 */
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