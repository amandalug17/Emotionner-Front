import React, { Component, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Elements/footerInside'
import RecoHero from '../Elements/recomendadoHero';
import ArticleView from '../Forms/articleF';
import PhraseView from '../Forms/PhraseF';
import Navbar_I from "../Elements/navbar";
import './../../App.css'


class RecomendationView extends Component {
  
  render() {

    return (
      <>
      <Navbar_I/>
      <RecoHero/>
      <Container >
      <Row> 
          <Col>
            <h1 className='d-flex justify-content-center'style={{margin: "20px", fontWeight:'lighter', letterSpacing: '5px', fontSize:'40px', fontFamily:'Montserrat'}}> Artículos recomendados</h1>
          </Col>
      </Row>
        <Row>
          <ArticleView/>
        </Row>
        </Container>
        <Row style={{backgroundColor: '#c6a7c7'}}> 
              <Col>
                <h1 className='d-flex justify-content-center'style={{margin: "20px",fontFamily:'Montserrat', fontSize:'25px'}}> Tu frase de hoy</h1>
              </Col>
          </Row>
          <Row style={{backgroundColor: '#c6a7c7'}}>
              <PhraseView />
          </Row>
            <div className="section-container">
                <div className="left-banner"></div>
                <div className="right-banner">
                    <div>
                    <h3 style={{fontFamily:'Dancing Script', fontSize:'40px'}}>Tu espacio seguro</h3>
                    <p style={{fontFamily:'Montserrat'}}>¡Recuerda registrar todas tu tareas y emociones<br/>para recibir más recomendaciones como esta!</p>
                    </div>
                </div>
            </div>
          <Footer/>
      </>
    )
  }
} export default RecomendationView;