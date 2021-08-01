import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

function Navbar(props) {
  console.log(`visible: ${props.visible}`);
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
    <div className='navigation'>
      <div className='navigation__box'>
        <nav className='navigation__nav' ref={props.currentRef}>
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
                className={`navigation__link ${
                  props.visible === 'about' ? 'active' : ''
                }`}
                onClick={() => {
                  closeMobileMenu();
                  props.scrollTo(props.sectionRefs[0].ref.current);
                }}
              >
                About
              </HashLink>
            </li>
            <li className='navigation__item'>
              <HashLink
                smooth
                to={'/#benefits'}
                className={`navigation__link ${
                  props.visible === 'benefits' ? 'active' : ''
                }`}
                onClick={() => {
                  closeMobileMenu();
                  props.scrollTo(props.sectionRefs[1].ref.current);
                }}
              >
                Your benefits
              </HashLink>
            </li>
            <li className='navigation__item'>
              <HashLink
                smooth
                to={'/#tours'}
                className={`navigation__link ${
                  props.visible === 'tours' ? 'active' : ''
                }`}
                onClick={() => {
                  closeMobileMenu();
                  props.scrollTo(props.sectionRefs[2].ref.current);
                }}
              >
                Popular tours
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
