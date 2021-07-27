import React, { useRef } from 'react';
import Header from '../Header';
import About from './About';
import Footer from '../Footer';
// import { useIntersection } from 'react-use';
// import gsap from 'gsap';

function Home() {
  // const sectionRef = useRef(null);
  // const intersection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5,
  // });
  // console.log(intersection);
  // const fadeIn = (element) => {
  //   gsap.to(element, {
  //     duration: 1,
  //     opacity: 1,
  //     y: -60,
  //     ease: 'power4.out',
  //     stagger: { amount: 0.3 },
  //   });
  // };
  // const fadeOut = (element) => {
  //   gsap.to(element, { duration: 1, opacity: 0, y: -20, ease: 'power4.out' });
  // };

  // intersection && intersection.intersectionRatio < 0.5
  //   ? fadeOut('.fadeIn')
  //   : fadeIn('.fadeIn'); //Not reached : // reached so animate
  // sectionRef={sectionRef}

  return (
    <div>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
export default Home;
