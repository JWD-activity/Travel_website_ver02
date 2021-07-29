import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className='navigation sticky-top'>
      <div className='navigation__box'>
        <nav className='navigation__nav'>
          <HashLink
            smooth
            to={'/#'}
            className='navigation__logo '
            onClick={closeMobileMenu}
          >
            Journey to Nature
            <i className='fab fa-typo3 ms-2' />
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul
            className={click ? 'navigation__list active' : 'navigation__list'}
          >
            <li className='navigation__item'>
              <HashLink
                smooth
                to={'/#about'}
                className='navigation__link active'
                onClick={closeMobileMenu}
              >
                About
              </HashLink>
            </li>
            <li className='navigation__item'>
              <HashLink
                smooth
                to={'/#benefits'}
                className='navigation__link'
                onClick={closeMobileMenu}
              >
                Your benefits
              </HashLink>
            </li>
            <li className='navigation__item'>
              <HashLink
                smooth
                to={'/#tours'}
                className='navigation__link'
                onClick={closeMobileMenu}
              >
                Popular tours
              </HashLink>
            </li>
            <li className='navigation__item'>
              <HashLink
                to='/'
                className='navigation__link'
                onClick={closeMobileMenu}
              >
                Stories
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
