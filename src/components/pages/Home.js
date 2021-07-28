import React, { useEffect } from 'react';
import About from './About';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Benefit from './Benefit';
import Tours from './Tours';

import gsap from 'gsap';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 1000,
      easing: 'ease-out-cubic',
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <About />
        <Benefit />
        <Tours />
      </main>
      <Footer />
    </div>
  );
}
export default Home;
