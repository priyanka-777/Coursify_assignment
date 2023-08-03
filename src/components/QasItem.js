import React from 'react';
import { Link } from 'react-router-dom';

function QasItem(props) {
  return (
    <>
      <li className='qas__item'>
        <div className='qas__item__link' >
         <figure className='qas__item__pic-wrap' data-category={props.label}>
            
          </figure>
          <div className='qas__item__info'>
            <h5 className='qas__item__text' >{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default QasItem;