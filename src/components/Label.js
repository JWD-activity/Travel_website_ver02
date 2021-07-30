import React from 'react';
import styles from './Label.module.css';
function Label(props) {
  return <h4 className={`${styles['title__label']}`}>{props.children}</h4>;
}

export default Label;
