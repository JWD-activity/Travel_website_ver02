import React from 'react';
import './Tours.css';
import TourItem from '../TourItem';
import Content from '../Content';

function Tours() {
  return (
    <section className='section-tours mx-5' id='tours'>
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
              <TourItem
                src='/images/Milford_sound.jpg'
                alt='Milford sound'
                dataAos='fade-up'
                dataDelay={300}
                label_first='Milford Sound Explorer'
                day='3 day tours'
                number='Up to 30 people'
                guide='2 tour guides'
                acommodation='Sleep in cozy hotels'
                difficulty='Difficulty: easy'
              />
            </div>
            <div className='col-lg-4 p-3'>
              <TourItem
                src='/images/Tongariro_National_Park.jpg'
                alt='Tongariro National Park'
                dataAos='fade-up'
                dataDelay={300}
                label_first='National Park Adventurer'
                day='5 day tours'
                number='Up to 15 people'
                guide='3tour guides'
                acommodation='Sleep in provided'
                difficulty='Difficulty: hard'
              />
            </div>
            <div className='col-lg-4 p-3'>
              <TourItem
                src='/images/forest.jpg'
                alt='Forest'
                dataAos='fade-up'
                dataDelay={300}
                label_first='The Forest Hiker'
                day='7 day tours'
                number='Up to 40 people'
                guide='6 tour guides'
                acommodation='Sleep in provided tents'
                difficulty='Difficulty: medium'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tours;
