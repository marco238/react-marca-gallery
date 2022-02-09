import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/slider">Galería</Link>
    </div>
  );
}
