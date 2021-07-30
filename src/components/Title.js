import React from 'react';
import styles from './Title.module.css';

function Title(props) {
  switch (props.headingSize) {
    case 1:
      return (
        <h1
          data-aos={props.dataAos}
          data-aos-delay={props.dataDelay}
          data-aos-offset={props.dataOff}
          className={`${styles['heading']} ${styles.h1}`}
        >
          {props.children}
        </h1>
      );

    case 2:
      return (
        <h2
          data-aos={props.dataAos}
          className={`${styles['heading']} ${styles.h2}`}
        >
          {props.children}
        </h2>
      );

    case 3:
      return (
        <h3 data-aos={props.dataAos} className={`${styles.h3}`}>
          {props.children}
        </h3>
      );

    case 4:
      return <h4 className={`${styles.h4}`}>{props.children}</h4>;

    default:
      return <h5 className={`${styles['p_heading']}`}>{props.children}</h5>;
  }
}

export default Title;
