import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='row justify-content-between mx-5'>
        <div className='col-lg-5'>
          <h3 className='d-block'>
            About J.N <i className='fab fa-typo3 me-2 mb-4' />
          </h3>
          <p className='d-block'>
            Built by JINOK SEO for personal project.
            <span className='mt-4 d-block'>
              Copyright © by Jinok Seo, all rights reserved
            </span>
          </p>
        </div>
        <div className='col-lg-5'>
          <ul className={`d-flex ${styles['footer-ul']}`}>
            <li className={`${styles['footer-icon']} `}>
              <Link
                to={{ pathname: 'https://www.facebook.com/' }}
                target='_blank'
              >
                <i className='fab fa-facebook-square' />
              </Link>
            </li>
            <li className={`${styles['footer-icon']} `}>
              <Link
                to={{ pathname: 'https://www.instagram.com/' }}
                target='_blank'
              >
                <i className='fab fa-instagram-square' />
              </Link>
            </li>
            <li className={`${styles['footer-icon']} `}>
              <Link
                to={{ pathname: 'https://twitter.com/?lang=en' }}
                target='_blank'
              >
                <i className='fab fa-twitter-square' />
              </Link>
            </li>
          </ul>

          <ul
            className={`${styles['footer-ul']} d-flex flex-column gap-4 text-end`}
          >
            <li className={`${styles['footer-list']}`}>
              <Link to='/'>Terms of Use</Link>
            </li>
            <li className={`${styles['footer-list']}`}>
              <Link to='/'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
