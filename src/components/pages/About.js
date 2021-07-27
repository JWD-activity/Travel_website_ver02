import React from 'react';
import Content from '../Content';
import Paragraph from '../Paragraph';
import PicCard from '../PicCard';

function About(props) {
  return (
    <section ref={props.sectionRef} className='section-about mx-5'>
      <div className='row justify-content-evenly'>
        <Content
          classname='mb__large fadeIn'
          heading='Exciting tours for adventurous people'
          sizes='secondary'
          align='center'
          initType={true}
        />
        <div className='col-lg-5 fadeIn'>
          <Content
            heading={`You're going to fall in love with nature`}
            sizes='tertiary'
            align='left'
            initType={false}
          />

          <Paragraph
            contentType='content'
            content='HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.'
            spaceing='right'
          />

          <Content
            heading='Live adventures like you never have before'
            sizes='tertiary'
            align='left'
            initType={false}
          />

          <Paragraph
            contentType='content'
            content='HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.'
            spaceing='right'
          />
        </div>
        <div className='col-lg-5 position-relative fadeIn'>
          <PicCard
            src='./images/traveler03-medium.jpg'
            alt='Traveler in New Zealand'
            direction='right'
          />
          <PicCard
            src='./images/traveler02-medium.jpg'
            alt='Traveler in Tonariro National Park'
            direction='left'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
