import React from 'react';
import './Tours.css';
<<<<<<< HEAD
import 
=======
import TourItem from '../TourItem';
import Content from '../Content';
>>>>>>> f7c8b6dc501ede4187ae38009d480edec02f23f9
function Tours() {
  return (
    <section className='section-tours mx-5 '>
      <div className='d-grid'>
        <div className='row '>
          <Content
            classname='mb__large'
            heading='Most popular tours'
            sizes='secondary'
            align='center'
            initType={true}
            dataAos='fade-up'
            dataDelay=''
          />

          <div className='section__tours--box d-flex'>
            <div className='col-lg-4 p-3'>
              <TourItem src='/images/Milford_sound.jpg' alt='Milford sound' />
            </div>
            <div className='col-lg-4 p-3'>
              <TourItem
                src='/images/Tongariro_National_Park.jpg'
                alt='Tongariro National Park'
              />
            </div>
            <div className='col-lg-4 p-3'>
              <TourItem src='/images/forest.jpg' alt='Forest' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tours;
