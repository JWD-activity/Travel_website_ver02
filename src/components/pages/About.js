import React from 'react';
import Content from '../Content';
import Paragraph from '../Paragraph';
import PicCard from '../PicCard';

function About(props) {
  return (
    <section ref={props.sectionRef} className='section-about mx-5'>
      <div className='row justify-content-evenly'>
        <Content
          classname='mb__large'
          heading='Exciting tours for adventurous people'
          sizes='secondary'
          align='center'
          initType={true}
          dataAos='fade-up'
          dataDelay=''
        />
        <div className='col-lg-5'>
          <Content
            heading={`You're going to fall in love with nature`}
            sizes='tertiary'
            align='left'
            initType={false}
            dataAos='fade-up'
            dataDelay={550}
          />

          <Paragraph
            contentType='content'
            content='HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.'
            spaceing='right'
            dataAos='fade-up'
            dataDelay={550}
          />

          <Content
            heading='Live adventures like you never have before'
            sizes='tertiary'
            align='left'
            initType={false}
            dataAos='fade-up'
            dataDelay={550}
          />

          <Paragraph
            contentType='content'
            content='HelloLorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.'
            spaceing='right'
            dataAos='fade-up'
            dataDelay={300}
          />
        </div>
        <div className='col-lg-5 position-relative'>
          <PicCard
            src='/images/traveler03-medium.jpg'
            alt='Traveler in New Zealand'
            direction='right'
            dataAos='fade-left'
            dataDelay={400}
          />
          <PicCard
            src='/images/traveler02-medium.jpg'
            alt='Traveler in Tonariro National Park'
            direction='left'
            dataAos='fade-left'
            dataDelay={500}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
