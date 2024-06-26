import React from 'react'
import Intro from '../components/Intro';
import CafeMenu from '../components/CafeMenu';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Intro />
      <CafeMenu />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage;
