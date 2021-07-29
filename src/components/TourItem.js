import React from 'react';
import './TourItem.css';
import List from './List';
import Label from './Label';

function TourItem(props) {
  return (
    <div
      className='tour__item position-relative'
      data-aos={props.dataAos}
      data-aos-delay={props.dataDelay}
    >
      <div className='tour__box position-absolute'>
        <figure className='tour__figure'>
          <img
            className='card-img-top'
            src={process.env.PUBLIC_URL + props.src}
            alt={props.alt}
          />
        </figure>
        <div className='tour__item--body p-4 text-center'>
          <Label label_first={props.label_first} />
          <List
            day={props.day}
            number={props.number}
            guide={props.guid}
            acommodation={props.acommodation}
            difficulty={props.difficulty}
          />
        </div>
      </div>
    </div>
  );
}

export default TourItem;
