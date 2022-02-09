import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home({ title, bg }) {
  return (
    <div className='home-container'>
      <div className='home-bg' style={{backgroundImage: `url(${bg})`}}></div>
      <div className='home-content'>
        <h1 className='home-header'>
          { title ? title : '' }
        </h1>

        { title ? <Link className='home-button' to='/slider'>Ver galería</Link> : '' }
      </div>
    </div>
  );
}