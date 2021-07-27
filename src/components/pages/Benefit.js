import React from 'react';
import './Benefit.css';
import TextCard from '../TextCard';

function Benefit() {
  return (
    <section
      className='section-features mx-5'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/water.jpg')`,
      }}
    >
      <div className='row'>
        <div className='section-features--box'>
          <div className='col-lg-4'>
            <TextCard
              icon='fas fa-globe'
              subtitle='Explore the world'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
            />
          </div>
          <div className='col-lg-4'>
            <TextCard
              icon='far fa-compass'
              subtitle='Meet nature'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
            />
          </div>
          <div className='col-lg-4'>
            <TextCard
              icon='fas fa-map-marker-alt'
              subtitle='Find your way'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
