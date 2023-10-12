import React from 'react';
import Cta from '../components/Cta';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import DoctorLists from '../components/DoctorLists';
import Services from '../components/Services';



const Home = () => (
    <>
        <Hero />
        <Intro />
        <Services />
        <DoctorLists />
        <Cta />
    </>

)

export default Home;

