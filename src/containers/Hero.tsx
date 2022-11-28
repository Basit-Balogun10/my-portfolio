import React from 'react'
import CommonButton from '../components/CommonButton';
import Header from '../components/Header'

const Hero = () => {
  return (
      <section>
          <Header />

          {/* GREETING */}
          <div className="">
              <h4>Hello there, my name is</h4>
              <h1>Basit Balogun.</h1>
              <h2>I solve problems with code.</h2>
          </div>

          {/* SHORT INTRO */}
          <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
          </p>

          <CommonButton buttonText="Get in touch!" isPrimary={false} />
      </section>
  );
}

export default Hero