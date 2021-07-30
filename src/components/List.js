import React from 'react';
import styles from './List.module.css';

function List(props) {
  return (
    <div className={styles.li}>
      <ul>
        <li>
          <i className={props.icon} />
          {props.tour[0]['day']} day tours
        </li>
        <li>
          <i className={props.icon} />
          Up to {props.tour[0]['number']}people
        </li>
        <li>
          <i className={props.icon} />
          {props.tour[0]['guide']} tour guides
        </li>
        <li>
          <i className={props.icon} />
          {props.tour[0]['acommodation']}
        </li>
        <li>
          <i className={props.icon} />
          Difficulty:{props.tour[0]['difficulty']}
        </li>
      </ul>
    </div>
  );
}

export default List;
