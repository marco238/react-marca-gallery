import React from 'react';
import './Endview.css';
import { Link } from 'react-router-dom';

export default function Endview() {
  return (
    <div className='endview-container'>
      <Link className='endview-button' to='/slider'>Ver de nuevo!</Link>
    </div>
  );
}
