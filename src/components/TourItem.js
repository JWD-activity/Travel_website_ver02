import React from 'react';
import './TourItem.css';
import { Card } from 'react-bootstrap';
import PicCard from './PicCard';

function TourItem(props) {
  return (
    <div className='tour__item position-relative'>
      <figure className='position-absolute tour__figure'>
        <img
          className='card-img-top'
          src={process.env.PUBLIC_URL + props.src}
          alt={props.alt}
          data-aos={props.dataAos}
          data-aos-delay={props.dataDelay}
        />
      </figure>
    </div>
  );
}

export default TourItem;
