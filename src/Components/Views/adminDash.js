/**
 * Imports
 */
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../Elements/sidebar';
import Article from '../AdminView/ArticlesCall'
import Phrase from '../AdminView/PhraseCall'
import './../../App.css'
/**
 * This class renders the dashboard of the administrator.
 */
class adminDashboard extends Component{
    render(){
        return(
            <>
            <div className='blanco d-flex justify-content-end'>
            <Sidebar/>
        <Container className="container col-md-9" style={{marginBottom: '20px'}}>
            <Row>
            <Col>
                <div className="welcome" style={{color:'#611d61'}}>
                    <h1 style={{fontFamily:'Roboto', fontWeight:'lighter', letterSpacing:'2px', fontSize:'40px'}}>BIENVENIDO ADMIN</h1>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> REVISA TUS ARTÍCULOS</h1>
            </Col>
            </Row>
            <Row>
            <Col>
                <Article/>
            </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                   <a href="/admin/AllArticles" className="btn btn--opacity homepagebutton ">Mostrar Más</a>
                </Col>
            </Row>
            <Row>
            <Col className = 'd-flex justify-content-end'>
                <div className = "buttonArrow">
                    <a className="link" href="/admin/createArticle"style={{textTransform: 'uppercase'}} >Añadir Artículo</a>
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <h1 style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'25px'}}> REVISA TUS FRASES</h1>
            </Col>
            </Row>
            <Row>
            <Col>
                <Phrase/>
            </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                   <a href="/admin/AllPhrases" className="btn btn--opacity homepagebutton ">Mostrar Más</a>
                </Col>
            </Row>
            <Row>
            <Col className = 'd-flex justify-content-end'>
                <div className = "buttonArrow">
                    <a className="link" href="/admin/createPhrase"style={{textTransform: 'uppercase'}} >Añadir Frase</a>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
      </>
        )
    }
 


} export default adminDashboard