import React from 'react';
import './Tours.css';
import TextCard from '../TextCard';
function Tours() {
  return (
    <section className='section-tours'>
      <div className='row'>
        <TextCard />
        <TextCard />
        <TextCard />
        {/* <h2 className='heading-secondary'>Most popular tours</h2> */}
      </div>
    </section>
  );
}

export default Tours;
