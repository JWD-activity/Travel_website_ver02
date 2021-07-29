import React, { useEffect } from 'react';
import About from './About';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Benefit from './Benefit';
import Tours from './Tours';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Title from '../Title';

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

      <Title headingSize={1}>HELLO WORLD</Title>
      <Title headingSize={2}>HELLO WORLD</Title>
      <Title headingSize={3}>HELLO WORLD</Title>
      <Title headingSize={4}>HELLO WORLD</Title>
      <Title>HELLO WORLD</Title>
      <Footer />
    </>
  );
}
export default Home;
