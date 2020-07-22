import React from 'react';
import './../../App.css'
import AuthService  from "./../../Services/auth.service";
/**
 * This is the admin side bar component
 */
const Sidebar_ = (props) => {
    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');

    if($button && $wrapper){
        $button.addEventListener('click', (e) => {
            e.preventDefault();
            $wrapper.classList.toggle('toggled');
            });

    }
    /**
 * This is the fuction to logout of the app, onClick, we call the function from authService logout 
 * that removes the current user from the locale storage of the browser
 */
    const logOut = () => {
      AuthService.logoutA();
    };

  return (
    <div id="wrapper">

  <aside id="sidebar-wrapper">
    <div className="sidebar-brand">
      <h2>Emotionner</h2>
    </div>
    <ul className="sidebar-nav">
      <li>
        <a  href="/admin/dashboard" ><i className="fa fa-home" style={{marginLeft:'7px',fontSize:'25px', marginRight:'20px'}}></i>Home</a>
      </li>
      <li>
        <a  href="/admin/createArticle" ><i className="fa fa-edit" style={{marginLeft:'7px',fontSize:'25px', marginRight:'20px'}}></i>Artículo</a>
      </li>
      <li>
        <a  href="/admin/createPhrase" ><i className="fas fa-pen-nib" style={{marginLeft:'7px',fontSize:'25px', marginRight:'20px'}}></i>Frases</a>
      </li>
      <li>
        <a href="/" onClick = {logOut}><i className="fa fa-user" style={{marginLeft:'7px', fontSize:'25px', marginRight:'20px'}} ></i>Cerrar Sesión</a>
      </li>
    </ul>
  </aside>

  <div id="navbar-wrapper">
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
        </div>
      </div>
    </nav>
  </div>

</div>
  );
}

 export default Sidebar_;
