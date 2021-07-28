import React from 'react';
import './Label.css';
function Label(props) {
  return (
    <h3 className='title__label'>
      <span>{props.label_first}</span>
    </h3>
  );
}

export default Label;
