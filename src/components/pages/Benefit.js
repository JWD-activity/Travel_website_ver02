import React from 'react';
import './Benefit.css';

function Benefit() {
  return (
    <section
      className='section-features mx-5'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/water.jpg')`,
      }}
    >
      <div className='row'>
        <div className='section-features--box'></div>
      </div>
    </section>
  );
}

export default Benefit;
