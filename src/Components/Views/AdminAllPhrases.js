/**
 * Imports
 */
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../Elements/sidebar';
import PhraseCallFull from '../AdminView/PhraseFullCall'
import './../../App.css'

/**
 * This class renders the view for the component to view all phrases in the database in the
 * administartor view.
 */
class AllPhrases extends Component{
    render(){
        return(
            <>
            <div className='blanco d-flex justify-content-end'>
            <Sidebar/>
        <Container className="container col-md-9" style={{marginBottom: '20px'}}>
            <Row>
            <Col>
                <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> REVISA TUS FRASES</h1>
            </Col>
            </Row>
            <Row>
            <Col>
                <PhraseCallFull/>
            </Col>
            </Row>
            <Row>
            <Col className = 'd-flex justify-content-end'>
                <div className = "buttonArrow">
                    <a className="link" href="/admin/createPhrase"style={{textTransform: 'uppercase'}} >Añadir Frases</a>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
      </>
        )
    }
 


} export default AllPhrases