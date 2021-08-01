import React from 'react';
import styles from './Benefit.module.css';
import Cardbox from '../Cardbox';
import Icon from '../Icon';
import Title from '../Title';
import Para from '../Para';

function Benefit(props) {
  return (
    <section
      ref={props.currentRef}
      id='benefits'
      className={`${styles['section-benefits']}`}
      // style={{
      //   backgroundImage: `url('${process.env.PUBLIC_URL}/images/water.jpg')`,
      // }}
    >
      <div className={`${styles['section-benefits-box']} row `}>
        <div className={`col-lg-3 col-md-6 p-3`}>
          <Cardbox dataAos='fade-up'>
            <div className='row p-4 text-center'>
              <div className='my-4'>
                <Icon icon='fas fa-globe' />
              </div>
              <Title>Explore Nature</Title>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur
              </Para>
            </div>
          </Cardbox>
        </div>
        <div className={`col-lg-3 col-md-6 p-3`}>
          <Cardbox dataAos='fade-up' dataDelay={200}>
            <div className='row p-4 text-center'>
              <div className='my-4'>
                <Icon icon='far fa-compass' />
              </div>

              <Title>Meet Nature</Title>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur
              </Para>
            </div>
          </Cardbox>
        </div>
        <div className={`col-lg-3 col-md-6 p-3`}>
          <Cardbox dataAos='fade-up' dataDelay={300}>
            <div className='row p-4 text-center'>
              <div className='my-4'>
                <Icon icon='fas fa-map-marker-alt' />
              </div>
              <Title>Find your way</Title>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur
              </Para>
            </div>
          </Cardbox>
        </div>
        <div className={`col-lg-3 col-md-6 p-3`}>
          <Cardbox dataAos='fade-up' dataDelay={400}>
            <div className='row p-4 text-center'>
              <div className='my-4'>
                <Icon icon='far fa-heart' />
              </div>
              <Title>Healthier Life</Title>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur
              </Para>
            </div>
          </Cardbox>
        </div>
      </div>
    </section>
  );
}

export default Benefit;
