import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <h2
      className={`${props.classname || ''} text-${props.align} ${
        props.initType ? 'heading__basic' : ''
      } heading__${props.sizes}`}
      data-aos={props.dataAos}
      data-aos-delay={props.dataDelay}
    >
      {props.heading}
    </h2>
  );
}

export default Content;
