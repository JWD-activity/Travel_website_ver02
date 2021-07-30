import React from 'react';
import styles from './Para.module.css';

function Para(props) {
  if (!props.dataAos) {
    return <p className={styles.p}>{props.children}</p>;
  } else {
    return (
      <p data-aos={props.dataAos} className={styles.p}>
        {props.children}
      </p>
    );
  }
}

export default Para;
