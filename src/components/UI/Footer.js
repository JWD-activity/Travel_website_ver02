import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
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
          <ul className='footer__icons d-flex flex-row-reverse gap-5'>
            <li>
              <Link
                to={{ pathname: 'https://www.facebook.com/' }}
                target='_blank'
              >
                <i className='fab fa-facebook-square' />
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: 'https://www.instagram.com/' }}
                target='_blank'
              >
                <i className='fab fa-instagram-square' />
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: 'https://twitter.com/?lang=en' }}
                target='_blank'
              >
                <i className='fab fa-twitter-square' />
              </Link>
            </li>
          </ul>

          <ul className='d-flex flex-column gap-4 text-end'>
            <li>
              <Link to='/'>Terms of Use</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
