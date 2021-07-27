import React from 'react';
import './Header.css';
import '../Button.css';
import Button from '../Button';
function Header() {
  return (
    <header
      className='header position-relative text-center'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg-1.jpg')`,
      }}
    >
      {/* <video src='/videos/beach.mp4' autoPlay loop muted /> */}
      <div className='header__text--box position-absolute translate-middle'>
        <h1 className='heading text-center mb-5'>
          <span className=' text-light d-block pb-3'>Outdoors is</span>
          <span className=' text-light d-block pb-3'>where life happens</span>
        </h1>
        <Button />
      </div>
    </header>
  );
}

export default Header;
