import React from 'react';
import styles from './Cardbox.module.css';

function Cardbox(props) {
  return <div className={`row ${styles['card']}`}>{props.children}</div>;
}

export default Cardbox;
