import React, { useRef } from 'react';
import About from './About';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Benefit from './Benefit';
import Tours from './Tours';

import { useIntersection } from 'react-use';
import gsap from 'gsap';

function Home() {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: { amount: 0.3 },
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, { duration: 1, opacity: 0, y: -20, ease: 'power4.out' });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn'); //Not reached : // reached so animate

  return (
    <div>
      <Header />
      <main>
        <About sectionRef={sectionRef} />
        <Benefit />
        <Tours />
      </main>

      <Footer />
    </div>
  );
}
export default Home;
