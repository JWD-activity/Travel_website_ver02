import React from 'react';
import styles from './Para.module.css';

function Para(props) {
  return (
    <p data-aos={props.dataAos} className={styles.p}>
      {props.children}
    </p>
  );
}

export default Para;
