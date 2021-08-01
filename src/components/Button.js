import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './Button.module.css';

function Button(props) {
  const classOptions = props.btnStyle === 'fill' ? 'fill-white' : '';

  return (
    <HashLink
      smooth
      to={props.link}
      className={`${styles['btn']} ${styles[classOptions]}`}
    >
      {props.children}
    </HashLink>
  );
}

export default Button;
