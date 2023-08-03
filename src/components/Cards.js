import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="head"><div className="waviy">
   <span style={{'--i':'1'}}>S</span>
   <span style={{'--i':'2'}}>E</span>
   <span style={{'--i':'3'}}>R</span>
   <span style={{'--i':'4'}}>V</span>
   <span style={{'--i':'5'}}>I</span>
   <span style={{'--i':'6'}}>C</span>
   <span style={{'--i':'7'}}>E</span>
   <span style={{'--i':'8'}}>S</span>
   &nbsp; &nbsp;
   

  </div></h1>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
          <ul className='cards__items'>
            <CardItem
            
              
              text='Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!'
              label='5X higher response from companies'
              
            />
            
            <CardItem
              
              text='Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At Instahyre, we do the work of finding the best jobs for you, so you can sit back and relax.'
              label='Your perfect job, delivered to you'
              
            />
            <CardItem
             
              text='We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself.'
              label='Privacy guaranteed'
              
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
