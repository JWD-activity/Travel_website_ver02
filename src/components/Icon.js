import React from 'react';

function Icon(props) {
  if (props.icon) return <i className={`card__icon ${props.icon}`}></i>;
  else return '';
}

export default Icon;
