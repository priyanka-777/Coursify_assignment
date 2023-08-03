import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typical from 'react-typical'


function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>COURSIFY</h1>
      <p>The Best Tech, Best Future</p>
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Find the jobs
        </Button>
      
      </div>
  );
}

export default HeroSection;
