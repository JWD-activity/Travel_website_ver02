import React from 'react';
import styles from './Tours.module.css';
import Cardbox from '../Cardbox';
import Picture from '../Picture';
import Title from '../Title';
import Label from '../Label';
import List from '../List';

function Tours(props) {
  const items = {
    tour_1: [
      {
        day: 3,
        number: 30,
        guide: 2,
        acommodation: 'Sleep in cozy hotels',
        difficulty: 'easy',
      },
    ],
    tour_2: [
      {
        day: 5,
        number: 15,
        guide: 3,
        acommodation: 'Sleep in provided',
        difficulty: 'hard',
      },
    ],
    tour_3: [
      {
        day: 7,
        number: 40,
        guide: 6,
        acommodation: 'Sleep in tents',
        difficulty: 'medium',
      },
    ],
  };

  return (
    <section
      ref={props.currentRef}
      className={`${styles['section-tours']}`}
      id='tours'
    >
      <div className={`row ${styles['section-tours-box']}`}>
        <div className='mb-3'>
          <Title dataAos='fade-up' headingSize={2}>
            Most popular tours
          </Title>
        </div>
        <div
          className={`${styles['sections-tours-group']} col-lg-3 col-md-4 col-sm-10`}
        >
          <Cardbox dataAos='fade-up' dataDelay={100}>
            <Picture src='/images/Milford_sound.jpg' alt='Milford sound' />
            <Label>Milford Sound Explorer</Label>
            <div className='px-5 py-3'>
              <List tour={items['tour_1']} icon={'fas fa-check-circle'} />
            </div>
          </Cardbox>
        </div>
        <div
          className={`${styles['sections-tours-group']} col-lg-3 col-md-4 col-sm-10`}
        >
          <Cardbox dataAos='fade-up' dataDelay={200}>
            <Picture
              src='/images/Tongariro_National_Park.jpg'
              alt='Tongariro National Park'
            />
            <Label>National Park</Label>
            <div className='px-5 py-3'>
              <List tour={items['tour_2']} icon={'fas fa-check-circle'} />
            </div>
          </Cardbox>
        </div>
        <div
          className={`${styles['sections-tours-group']} col-lg-3 col-md-4 col-sm-10`}
        >
          <Cardbox dataAos='fade-up' dataDelay={300}>
            <Picture src='/images/forest.jpg' alt='Forest' />
            <Label>The Forest Hiker</Label>
            <div className='px-5 py-3'>
              <List tour={items['tour_3']} icon={'fas fa-check-circle'} />
            </div>
          </Cardbox>
        </div>
      </div>
    </section>
  );
}

export default Tours;
