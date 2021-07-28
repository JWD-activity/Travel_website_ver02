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
          <div className='col-lg-3 fadeIn'>
            <TextCard
              icon='fas fa-globe'
              subtitle='Explore Nature'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
              dataAos='fade-up'
              dataDelay={300}
            />
          </div>
          <div className='col-lg-3 fadeIn'>
            <TextCard
              icon='far fa-compass'
              subtitle='Meet Nature'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
              dataAos='fade-up'
              dataDelay={400}
            />
          </div>
          <div className='col-lg-3 fadeIn'>
            <TextCard
              icon='fas fa-map-marker-alt'
              subtitle='Find your way'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
              dataAos='fade-up'
              dataDelay={500}
            />
          </div>
          <div className='col-lg-3 fadeIn'>
            <TextCard
              icon='far fa-heart'
              subtitle='Healthier Life'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.'
              dataAos='fade-up'
              dataDelay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
