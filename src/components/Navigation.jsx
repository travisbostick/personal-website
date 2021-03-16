import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar collapseOnSelect variant='dark' expand='md'>
      <Navbar.Brand href='/'>
        <img className='navbar-brand' src='./images/logo.png' alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='nav-link' href='/'>
            home
          </Nav.Link>
          <Nav.Link className='nav-link' href='/software'>
            software
          </Nav.Link>
          <Nav.Link className='nav-link' href='/sheet-music'>
            sheet music
          </Nav.Link>
          <Nav.Link className='nav-link' href='/video'>
            video
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
