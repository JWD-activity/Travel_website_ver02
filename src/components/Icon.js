import React from 'react';
import styles from './Icon.module.css';

function Icon(props) {
  if (props.icon)
    return (
      <i
        className={`${styles['icon']} ${styles['icon_box']} ${props.icon}`}
      ></i>
    );
  else return '';
}

export default Icon;
