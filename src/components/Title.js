import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  switch (props.headingSize) {
    case 1:
      return (
        <h1 className={`${styles['heading']} ${styles.h1}`}>
          {props.children}
        </h1>
      );

    case 2:
      return (
        <h2 className={`${styles['heading']} ${styles.h2}`}>
          {props.children}
        </h2>
      );

    case 3:
      return <h3 className={`${styles.h3}`}>{props.children}</h3>;

    case 4:
      return <h4 className={`${styles.h4}`}>{props.children}</h4>;

    default:
      return <p className={`${styles['p_heading']}`}>{props.children}</p>;
  }
}

export default Title;
