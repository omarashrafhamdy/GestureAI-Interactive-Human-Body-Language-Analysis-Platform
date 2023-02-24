import React from 'react';

import About from './components/about/About';
import HeroSection from './components/hero/HeroSection';
import LiveDemo from './components/livedemo/LiveDemo';
import Navbar from './components/navbar/Navbar';
import WhatWeOffer from './components/whatweoffer/WhatWeOffer';

function LandingPage() {
  return (
    <div className='container-fluid p-0'>
        <Navbar/>
        <HeroSection/>
        <About/>
        <WhatWeOffer/>
        <LiveDemo/>
    </div>
  )
}

export default LandingPage