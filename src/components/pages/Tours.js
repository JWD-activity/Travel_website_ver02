import React from 'react';
import './Tours.css';
import TextCard from '../TextCard';
function Tours() {
  return (
    <section className='section-tours mx-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <TextCard />
        </div>
        <div className='col-lg-4'>
          <TextCard />
        </div>
        <div className='col-lg-4'>
          <TextCard />
        </div>

        {/* <h2 className='heading-secondary'>Most popular tours</h2> */}
      </div>
    </section>
  );
}

export default Tours;
