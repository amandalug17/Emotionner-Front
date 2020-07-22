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

  

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Emotionner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>  
          <NavItem>
              <NavLink href="/login">Iniciar Sesion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/singup">Registrate</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar_;
