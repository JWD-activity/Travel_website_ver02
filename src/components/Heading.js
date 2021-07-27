import React from 'react';
import './Heading.css';

function Heading(props) {
  return (
    <h2
      className={`${props.classname || ''} text-${props.align} ${
        props.initType ? 'heading__basic' : ''
      } heading__${props.sizes}`}
    >
      {props.heading}
    </h2>
  );
}

export default Heading;
