import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar';

import About from './About';
import Header from '../UI/Header';
import Benefit from '../pages/Benefit';
import Tours from '../pages/Tours';
import Footer from '../UI/Footer';

import 'aos/dist/aos.css';
import Aos from 'aos';

// getting current viewed section
const getDimensions = (element) => {
  const { height } = element.getBoundingClientRect();
  const offsetTop = element.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

// scroll to viewed section
const scrollTo = (element) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

function Home() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const toursRef = useRef(null);

  const sectionRefs = [
    { section: 'header', ref: headerRef },
    { section: 'about', ref: aboutRef },
    { section: 'benefits', ref: benefitsRef },
    { section: 'tours', ref: toursRef },
  ];

  useEffect(() => {
    // init setting for element's motion
    Aos.init({
      offset: 50,
      duration: 1000,
      easing: 'ease-out-cubic',
      delay: 100,
    });

    const handleScroll = () => {
      // getiign position
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      // finding current selected section
      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if (element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  return (
    <>
      <Navbar
        scrollTo={scrollTo}
        sectionRefs={sectionRefs}
        visible={visibleSection}
      />
      <Header currentRef={headerRef} />
      <main>
        <About currentRef={aboutRef} />
        <Benefit currentRef={benefitsRef} />
        <Tours currentRef={toursRef} />
      </main>
      <Footer />
    </>
  );
}
export default Home;
