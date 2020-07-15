import React from 'react'
import Footer from '../Elements/footerInside';


const HomePage = () => {

    return (
        <>
        <div className="banner">
        <div className="banner__overlay">
          <div className="banner__container">
            <h1 className="banner__title">Emotionner</h1>
            <p className="banner__text">Creado por Amanda Gonzalez, Andrea Charles y Orly Dahan</p>
            <a href="/login" className="btn btn--opacity homepagebutton">Inicia Sesión</a>
          </div>
          <img className="banner__scroll-down" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo="/>
        </div>
      </div>
      <div className="sect sect--type">
        <div className="container">
          <div className="row row--center" className= "d-flex justify-content-center">
            <div className="col-md-5 col-xs-8 col-sm-6 col--inbl ">
              <h1 className="sect__title">Creemos que el bienestar emocional es lo más importante</h1>
            <p className=" pHomepage sect__subtitle">
              La ciencia nos ayuda a comprender cada día lo importante que son las emociones para nuestro desarrollo personal. Por ello, emotionner decide prestar suma atención a las mismas y ayudarte constantemente a aceptar y manejar estos sentimientos.
            </p>
            </div>
          </div>
          <div className="row row--small row--margin row--center">
            <div className="col-md-4 col-sm-4 coffee">
              <img src="https://miro.medium.com/max/4408/1*Dahjzk4_GsaFH-kRXHfaiw.png" className="coffee__img"/>
              <h2 className="coffee__name">Conocete mejor</h2>
              <p className="pHomepage coffee__descr">
                Conoce que efectos tienen las emociones en tu cuerpo, lleva un registro de las mismas y controla aquellas emociones que invaden tu cabeza.
              </p>
            </div>
            
            <div className="col-md-4 col-sm-4 coffee">
              <img src="https://cdn4.iconfinder.com/data/icons/startup-90/64/34-512.png" style={{maxHeight:'210px', maxWidth:'200px'}}className="coffee__img"/>
              <h2 className="coffee__name">Estamos contigo</h2>
              <p className="pHomepage coffee__descr">
                  Emotionner no solo te permite llevar un diario de tus tareas y emociones; buscamos aconsejarte y guiarte a través de los días buenos y no tan buenos.
              </p>
            </div>
            
            <div className="col-md-4 col-sm-4 coffee">
              <img src="https://img.icons8.com/cotton/2x/task-planning.png" style={{maxHeight:'200px'}}className="coffee__img"/>
              <h2 className="coffee__name">Organizate</h2>
              <p className="pHomepage coffee__descr">
                Sabemos lo importante que es administrar tu tiempo eficientemente. ¡Organiza y planifica tus tareas en el día a día con nosotros y podrás así disminuir tus niveles de estrés y ansiedad!
              </p>
            </div>  
          </div>
        </div>
</div>

<div className="half-sect">
  <div className="half half-sect__first">
    <div className="description">
      <h2 className="description__title">«C'est la vie»</h2>
      <p className="description__p">Creemos fielmente en que todo es posible cuando asumimos el control de nuestras vidas. Recuerda concentrate en las pequeñas cosas por las que vale la pena alegrarse y no te quedes estancada en los malos pensamientos. </p>
    </div>

  </div>
    <div className="half half-sect__second">  </div>
</div>

<div className="sect sect--great d-flex justify-content-end">
    <div className="row">
      <div className="col-md-8 col-sm-7 col-sm-offset-4 col-md-offset-6">
        <div className="description">
      <h2 className="description__title">¡Comienza en Emotionner ya!</h2>
      <a href="/singup" className="btn btn--opacity homepagebutton d-flex justify-content-center"  >Registrate</a>
      </div>
      </div>
  </div>
</div>

  <Footer/>
        </>
        
    );
}


export default HomePage;