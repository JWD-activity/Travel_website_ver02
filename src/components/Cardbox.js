import React from 'react';
import styles from './Cardbox.module.css';

function Cardbox(props) {
  return (
    <div
      className={`${styles['card']}`}
      data-aos={props.dataAos}
      data-aos-delay={props.dataDelay}
    >
      {props.children}
    </div>
  );
}

export default Cardbox;
