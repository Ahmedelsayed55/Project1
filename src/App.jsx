import React from 'react'
import { Hero } from './Hero/Hero'
import { Means } from './SecSection/Means'
import SectionThird from './Section3/SectionThird'
import FourthSection from './Section4/FourthSection';
import Footer from './Section4/Footer';

export default function App ()  {
  return (
    <div>
        <Hero/>
        <Means/>
        <SectionThird/>
        <FourthSection/>
        <Footer/>
    </div>
  )
}
