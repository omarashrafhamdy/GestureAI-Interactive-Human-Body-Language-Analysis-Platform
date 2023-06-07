import './navbar.css';

import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md w-100">

    <a className="navbar-brand font30 fontcolor ml-5 nohover grow" href="#">
    -GestureSense-
    </a>

    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <div className="navbar-nav">

        <ul className="nav nav-pills ">
            <li className="nav-item m-3">
                <Link className='nav-link font24 fontcolor px-3 grow' to="/"> Home</Link>
            </li>
            <li className="nav-item m-3">
                <a className="nav-link font24 fontcolor px-3 grow" href="#WhatWeOffer">About</a>
            </li>
            <li className="nav-item m-3">
                <a className="nav-link font24 fontcolor px-3 grow" href="#liveDemo">Features</a>
            </li>
            <li className="nav-item m-3">
                <Link className="nav-link font24 fontcolor px-3 grow"  to="/signin">Sign in</Link>
            </li>
        </ul>
        
      </div>

    </div>

</nav>
  )
}

export default Navbar