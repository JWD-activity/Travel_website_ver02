import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button(props) {
  const classname = props.btnStyle === 'fill' ? 'fill-white' : '';

  return (
    <Link to='/' className={`${styles['btn']} ${styles[classname]}`}>
      {props.children}
    </Link>
  );
}

export default Button;
