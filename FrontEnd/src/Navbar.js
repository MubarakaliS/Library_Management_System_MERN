import React, { useState } from 'react';
import './Navbar.css';
import Content1 from './Components/HomeComponets/Content1';
import Content2 from './Components/HomeComponets/Content2';
import NewBook from './Components/HomeComponets/NewBook';
import Footer from './Components/Footer';

const Navbar = () => {

  return (
    <>

      {/* <nav className="navbar" style={{ display: "block" }}>
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Faculties</a></li>
            <li><a hred="#" id='login'>Login</a></li>
          </ul>
          <h1 className="logo">MCA LIBRARY</h1>
        </div>
      </nav> */}
      <Content1/>
     
      {/* <NewBook/> */}
      {/* <NewBook/> */}
    </>
  );
};

export default Navbar;
