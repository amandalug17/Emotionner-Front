/**
 * Imports
 */
import React, { useState, useEffect } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import AuthService from './../../Services/auth.service'
import './../../App.css'
/**
 * This is the navbar component
 */
const Navbar_ = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
  

    if (user) {
      setCurrentUser(user);
    }
  }, []);
/**
 * This is the fuction to logout of the app, onClick, we call the function from authService logout 
 * that removes the current user from the locale storage of the browser
 */
  const logOut = () => {
    AuthService.logout();
  };
  /**
   * Function to toggle the navbar , we set the state to false
   */
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emotionner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;
