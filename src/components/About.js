import React from 'react'
import coursify from '../assests/hire.jpeg'
import './about.css'
import {FaFacebookSquare,FaTwitter,FaInstagramSquare} from "react-icons/fa";
export default function About() {
  return (
    <div className='about-us'>
        <div className='container'>
            <div className='row'>
                <div className='flex'>
                    <h2 className='head'>ABOUT US</h2>
                    <h3>Discover our Team's Story</h3>
                   <p> This portal will be used by companies in India and worldwide for Hiring software engineers, Product Managers, Data Scientist etc.</p>
                   <p>-&nbsp; Where startups and job seekers connect.</p>
                    <p>-&nbsp;Say goodbye to back and forth emails and attachments

Say hello to a new era of candidate presentation.  </p>
                    <div className='social-links'>
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaInstagramSquare /></a>   
                    </div>
                </div>
                <div className='flex'>
                   
                   <img src={coursify} /> 
                   
                </div>
            </div>
        </div>
    </div>
  )
}
