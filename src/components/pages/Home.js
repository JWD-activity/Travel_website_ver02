import React, { useEffect } from 'react';
import About from './About';
import Header from '../UI/Header';
import Benefit from '../pages/Benefit';
import Tours from '../pages/Tours';
import Footer from '../UI/Footer';

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
    <>
      <Header />
      <main>
        <About />
        <Benefit />
        <Tours />
      </main>
      <Footer />
    </>
  );
}
export default Home;
