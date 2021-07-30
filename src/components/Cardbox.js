import React from 'react';
import styles from './Cardbox.module.css';

function Cardbox(props) {
  return (
    <div
      className={`col-sm-10 ${styles['card']}`}
      data-aos={props.dataAos}
      data-aos-delay={props.dataDelay}
    >
      {props.children}
    </div>
  );
}

export default Cardbox;
