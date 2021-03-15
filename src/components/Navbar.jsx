import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <img className='navbar-brand' src='./images/logo.png' alt='logo' />
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggler'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarToggler'>
        <ul className='navbar-nav'>
          <NavLink className='nav-link' exact to='/'>
            home
          </NavLink>
          <NavLink className='nav-link' to='software'>
            software
          </NavLink>
          <NavLink className='nav-link' to='sheet-music'>
            sheet music
          </NavLink>
          <NavLink className='nav-link' to='video'>
            video
          </NavLink>
          {/* <NavLink className='nav-link' to='contact'>
            contact
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
