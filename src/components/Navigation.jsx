import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      variant='dark'
      expand='md'
    >
      <Navbar.Brand href='/'>
        <img className='navbar-brand' src='./images/logo.png' alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink
            className='nav-link'
            exact
            to='/'
            onClick={() => setExpanded(false)}
          >
            home
          </NavLink>
          <NavLink
            className='nav-link'
            to='/software'
            onClick={() => setExpanded(false)}
          >
            software
          </NavLink>
          <NavLink
            className='nav-link'
            to='/sheet-music'
            onClick={() => setExpanded(false)}
          >
            sheet music
          </NavLink>
          <NavLink
            className='nav-link'
            to='/video'
            onClick={() => setExpanded(false)}
          >
            video
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
