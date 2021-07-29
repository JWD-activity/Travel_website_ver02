import React, { useEffect } from 'react';
import About from './About';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Benefit from './Benefit';
import Tours from './Tours';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Cardbox from '../Cardbox';
import Title from '../Title';
import Para from '../Para';
import Icon from '../Icon';
import Picture from '../Picture';

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

      <Cardbox>
        <Icon icon='fas fa-globe'>Neber</Icon>
        <Title>Hellow</Title>
        <Picture
          src='/images/traveler03-medium.jpg'
          alt='Traveler in New Zealand'
        ></Picture>
        <Para>
          djflakjflafd
          adfafajlfdjal;djflajdfl;ajdljfla;jfdlafl;jalfjdal;fjlsjdflajflds
        </Para>
      </Cardbox>
      {/* <Button btnStyle='fill'>Hellow</Button>
 <Title headingSize={1}>HELLO WORLD</Title>
     */}
      <Footer />
    </>
  );
}
export default Home;
