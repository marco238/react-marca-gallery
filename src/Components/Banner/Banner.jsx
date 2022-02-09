import React from 'react';
import './Banner.css';

export default function Banner({closeAd}) {
  return (
    <div className='banner-container'>
      <div className='banner-box'>
        <button className='banner-close-button' onClick={closeAd}>X</button>
        <h2 className='banner-header'>Banner!!!</h2>
      </div>
    </div>
  );
}