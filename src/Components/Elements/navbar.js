import React, { useState, useEffect } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import AuthService from './../../Services/auth.service'
import './../../App.css'

const Navbar_ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
  

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emotionner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {currentUser ? (
          <Nav className="mr-auto" navbar>  
          <NavItem>
              <NavLink href="/profile" >Mi calendario</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/agenda" >Mi agenda</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mood" >Mi Mood Journal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/articles" >Articulos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/stats" >Estadísticas</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/' type='button' style={{fontWeight:'lighter'}, {fontSize:'16px'}} className='btn-md btn-light' onClick = {logOut}><i className="fa fa-user"></i>   Cerrar Sesión</NavLink>
            </NavItem>
            </Nav>
          ): 
          <Nav className="mr-auto" navbar>  
          <NavItem>
              <NavLink href="/login">Iniciar Sesion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/singup">Registrate</NavLink>
            </NavItem>
            </Nav>
            }
         
          
          
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;
