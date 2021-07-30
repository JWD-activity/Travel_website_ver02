import React, { useEffect } from 'react';
import About from './About';
import Header from '../UI/Header';
import Benefit from '../pages/Benefit';
import Footer from '../UI/Footer';
import Tours from './Tours';
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
      </main>
      {/* <Footer /> */}
    </>
  );
}
export default Home;
