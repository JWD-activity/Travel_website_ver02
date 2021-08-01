import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar';

import About from './About';
import Header from '../UI/Header';
import Benefit from '../pages/Benefit';
import Tours from '../pages/Tours';
import Footer from '../UI/Footer';

import 'aos/dist/aos.css';
import Aos from 'aos';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
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

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
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

  // useEffect(() => {
  //   Aos.init({
  //     offset: 50,
  //     duration: 1000,
  //     easing: 'ease-out-cubic',
  //     delay: 100,
  //   });
  // }, []);

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
