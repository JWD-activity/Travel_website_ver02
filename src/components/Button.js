import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
  return (
    <Link className='text-uppercase btn__basic btn__fill animated ' to='/'>
      Discover our tours
    </Link>
  );
}

export default Button;
