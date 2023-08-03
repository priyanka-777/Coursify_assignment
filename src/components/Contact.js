import React from 'react'
import './contact.css'
import { GrLocation ,GrMailOption} from "react-icons/gr";
import {FaFacebookSquare,FaTwitter,FaInstagramSquare,FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
export default function () {
  return (
    <div className='container1'>
      <div className='contact-us'>


          <div className='title'>
            <h2>Get in Touch</h2>
          </div>
        <div className='box'>
  
          <div className='contact form'>
            <h3>Send a Message</h3>
            <form>
              <div className='formBox'>
                <div className='row50'>
                  <div className='inputBox'>
                    <span>First Name</span>
                    <input type='text' placeholder='John'></input>
                    
                  </div>
                  <div className='inputBox'>
                    <span>Second Name</span>
                    <input type='text' placeholder='Doe'></input>
                    
                  </div>
                </div>
                <div className='row50'>
                  <div className='inputBox'>
                    <span>Email</span>
                    <input type='text' placeholder='John@gmail.com'></input>
                    
                  </div>
                  <div className='inputBox'>
                    <span>Contact No</span>
                    <input type='text' placeholder='+91 879 678 9854'></input>
                    
                  </div>
                </div>
                <div className='row100'>
                  <div className='inputBox'>
                  <span>Message</span>
                  <textarea placeholder='Write your message here...'></textarea>
                    
                  </div>
                </div>

                <div className='row100'>
                  <div className='inputBox'>
                  <input type='submit' value='Send'></input>
                    
                  </div>
                </div>


              </div>

            </form>
          </div>



          <div className='contact info'>
            <h1>Contact Info</h1>
            <br></br>
            <div className='infoBox'>
              <div>
                <span><GrLocation /></span>
                <p>Hyderabad</p>
               
                </div>
                <div>
                  <span><GrMailOption /></span>
                  <a href="mailto:coursify.india@gmail.com ">coursify.india@gmail.com </a>
                </div>
                
                <ul className="sci">
                  <li><a href="#"><FaFacebookSquare/></a></li>
                  <li><a href="#"><FaWhatsapp/></a></li>
                  <li><a href="#"><FaLinkedin/></a></li>
                  <li><a href="#"><FaInstagramSquare/></a></li>
                  </ul>
                </div>
          </div>
          <div className='contact map'>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.628895580718!2d80.21484852782386!3d13.08922035245949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d886b1eb8b%3A0xcee0c1403aaad823!2sAnnanagar%20East%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689669884183!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          
        </div>
      
      
      
      
      </div>
    </div>
   
  )
}

