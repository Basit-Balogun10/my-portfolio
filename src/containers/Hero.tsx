import React from 'react'
import { MdWavingHand } from "react-icons/md";

import CommonButton from '../components/CommonButton';

const Hero = () => {
  return (
      <section className="my-20 px-7 md:px-44">
          {/* GREETING */}
          <div className="space-y-4 md:space-y-10 md:text-left">
              <h4 className="md:ml-2 text-dimmedSecondaryColor dark:text-secondaryColor text-xl italic tracking-wide">
                  Hello there
                  <MdWavingHand className="inline mx-2 text-2xl text-amber-800" /> My name is
              </h4>
              <div className="space-y-2 md:space-y-12">
                  <h1 className="font-comfortaa font-black md:font-extrabold text-4xl md:text-[5rem] dark:text-gray-300 tracking-wide md:tracking-normal">
                      Basit Balogun.
                  </h1>
                  <h2 className="mb-3 font-comfortaa font-black md:font-extrabold text-3xl md:text-[5rem] md:tracking-normal opacity-70">
                      I solve problems with code.
                  </h2>
              </div>
          </div>
          {/* SHORT INTRO */}
          <p className="md:text-left md:w-[55%] mt-4 md:mt-12 mb-6 md:mb-4 md:text-lg opacity-70">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
          </p>

          <div className="md:w-full flex items-center justify-start space-x-6">
              <CommonButton
                  cssClasses="scale-on-hover md:mx-0 w-2/3 md:w-1/4"
                  buttonText="Get in touch!"
                  marginTop="6"
                  isPrimary={false}
                  width="1/4"
              />
              <CommonButton
                  cssClasses="scale-on-hover hidden md:block md:w-1/4"
                  buttonText="Downlaod my resume"
                  marginTop="6"
                  isPrimary={true}
                  width="1/4"
              />
          </div>
      </section>
  );
}

export default Hero