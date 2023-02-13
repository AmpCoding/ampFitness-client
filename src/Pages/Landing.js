import React from 'react';
import Workoutvideo from "../video/Cable-kickbacks.mp4";
import Pricing from '../Components/Programcards';
import Results from '../Components/Results';
import About from '../Components/About';
import Faqs from '../Components/Faqs';
import Header from '../Components/Header';

const Landing = () => {
  return (
    <div>
        <Header />
        {/* <h1>Hero Image Goes Here!</h1> */}
        <video controls autoPlay muted loop width="100%" height="500px" >
          <source src={Workoutvideo} type='video/mp4' />
        </video>

        {/* <h2>
            GYM PROGRAMS
        </h2> */}
        <Pricing />
        <Results />
        <About />
        <Faqs />
    </div>
    )
  }
      

export default Landing