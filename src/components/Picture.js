import React from 'react';
import styles from './Picture.module.css';

function Picture(props) {
  return (
    <figure>
      <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
    </figure>
  );
}

export default Picture;
