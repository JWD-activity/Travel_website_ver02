import React from 'react';
import Title from '../Title';
import Para from '../Para';
import CardBox from '../Cardbox';
import Picture from '../Picture';
import styles from './About.module.css';

function About(props) {
  return (
    <section
      ref={props.currentRef}
      className={`section-about ${styles['section-about']}`}
      id='about'
    >
      <div className='row justify-content-evenly p-3'>
        <div className='col-xl-10 p-3'>
          <Title dataAos='fade-up' headingSize={2}>
            Exciting tours for adventurous people
          </Title>
        </div>

        <div className='col-lg-5 col-md-10  p-3'>
          <Title dataAos='fade-up' headingSize={3}>
            You're going to fall in love with nature
          </Title>
          <Para dataAos='fade-up'>
            HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
            ducimus quam nisi exercitationem omnis earum qui. HelloLorem ipsum
            dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
            aspernatur libero repellat.
          </Para>

          <Title dataAos='fade-up' headingSize={3}>
            Live adventures like you never have before
          </Title>
          <Para dataAos='fade-up'>
            HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
            ducimus quam nisi exercitationem omnis earum qui. HelloLorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </Para>
        </div>
        <div className={`col-lg-5 col-md-10 ${styles['position-pic-parent']}`}>
          <div className={` ${styles['position-pic']}`}>
            <CardBox dataAos='fade-up' dataDelay={100}>
              <Picture
                src='/images/traveler03-medium.jpg'
                alt='Traveler in New Zealand'
              ></Picture>
            </CardBox>
          </div>
          <div className={`${styles['position-pic']}`}>
            <CardBox dataAos='fade-up' dataDelay={100}>
              <Picture
                src='/images/traveler02-medium.jpg'
                alt='Traveler in Tonariro National Park'
              ></Picture>
            </CardBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
