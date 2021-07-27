import React from 'react';
import './PicCard.css';

function PicCard(props) {
  const classname = props.direction ? `img__${props.direction}` : '';
  return (
    <figure>
      <img
        className={`img__box ${classname}`}
        src={process.env.PUBLIC_URL + props.src}
        alt={props.alt}
      />
    </figure>
  );
}

export default PicCard;
