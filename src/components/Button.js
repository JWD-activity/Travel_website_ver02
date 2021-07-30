import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button(props) {
  const classOptions = props.btnStyle === 'fill' ? 'fill-white' : '';

  return (
    <Link to='/' className={`${styles['btn']} ${styles[classOptions]}`}>
      {props.children}
    </Link>
  );
}

export default Button;
