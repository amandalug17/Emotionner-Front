/**
 * Imports 
 */
//React library
import React, {Component} from 'react';
//Admin sidebar component
import Sidebar from '../Elements/sidebar';
//Create article component
import CreateArticle from '../Forms/articulo-form';
//App css file
import './../../App.css'

/**
 * This class renders the view of the component to create an article in the
 * administartor view.
 */
class addArticleView extends Component{
    render(){
        return(
            <>
            <Sidebar/>
            <div className='blanco'>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col col-md-10'>
                    <CreateArticle/>
                    </div>
                </div>
            </div>
            </div>
        </>
        )
    }
 


} export default addArticleView