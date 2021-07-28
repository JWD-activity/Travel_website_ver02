import React from 'react';
import './List.css';

function List(props) {
  return (
    <div className='list'>
      <ul>
        <li>{props.day}</li>
        <li>{props.number}</li>
        <li>{props.guide}</li>
        <li>{props.accommodation}</li>
        <li>{props.difficulty}</li>
      </ul>
    </div>
  );
}

export default List;
