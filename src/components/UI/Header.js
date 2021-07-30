import React from 'react';
// import './Header.css';
// import '../Button.css';
import styles from './Header.module.css';
import Title from '../Title';
import Button from '../Button';
function Header() {
  return (
    <header>
      <div
        className={`position-relative text-center ${styles['header-box']}`}
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg-1.jpg')`,
        }}
      >
        <div className={`${styles['header-title-box']}`}>
          <span>
            <Title
              dataAos='fade-right'
              dataOff={0}
              dataDelay={0}
              headingSize={1}
            >
              Outdoors is
            </Title>
          </span>
          <span>
            <Title
              dataAos='fade-left'
              dataOff={0}
              dataDelay={0}
              headingSize={1}
            >
              where life happens
            </Title>
          </span>
          <div className='my-5 pt-2'>
            <Button btnStyle='fill'>Discover our tours</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
