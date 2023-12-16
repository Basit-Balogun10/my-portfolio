import React from "react";
import { MdWavingHand } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll"

import CommonButton from "../components/CommonButton";

const Hero = () => {
    return (
        <section className="my-20 px-7 lg:px-44">
            {/* GREETING */}
            <div className="space-y-4 lg:space-y-6 lg:text-left">
                <h4
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="font-pacifico lg:ml-2 text-dimmedSecondaryColor dark:text-secondaryColor text-xl tracking-wide lg:tracking-widest"
                >
                    Hello there
                    <MdWavingHand className="inline mb-2 mx-2 text-2xl text-amber-800" />{" "}
                    My name is...
                </h4>
                <div className="space-y-2 lg:space-y-0">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        className="font-comfortaa font-black lg:font-extrabold text-4xl lg:text-[5rem] dark:text-gray-300 tracking-wide lg:tracking-normal lg:leading-[6rem]"
                    >
                        Basit Balogun.
                    </h1>
                    <h2
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-delay="1500"
                        className="font-pacifico lg:font-comfortaa mb-3 lg:font-extrabold text-3xl lg:text-[4rem] xl:text-[5rem] lg:tracking-normal lg:leading-[5rem] opacity-70"
                    >
                        I solve problems with code.
                    </h2>
                    {/* <h1 className="font-comfortaa font-black lg:font-extrabold text-4xl lg:text-[5rem] dark:text-gray-300 tracking-wide lg:tracking-normal">
                        Basit Balogun.
                    </h1>
                    <h2 className="font-pacifico lg:font-comfortaa mb-3 lg:font-extrabold text-3xl lg:text-[5rem] lg:tracking-normal opacity-70">
                        I solve problems with code.
                    </h2> */}
                </div>
            </div>
            {/* SHORT INTRO */}
            <p
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="1500"
                data-aos-offset="50"
                className="lg:text-left lg:w-4/5 xl:w-[55%] mt-4 lg:mt-6 mb-6 lg:mb-4 lg:text-lg opacity-70"
            >
                As a committed software engineer, I hold 1.5 years of professional experience in software development, bolstered by a composite 2 years in mobile and frontend development through personal initiative, volunteering, and freelance endeavors. My proficiency in troubleshooting and debugging is underpinned by a team-centric mentality, rapid learning aptitude, and resilience in the face of swiftly evolving circumstances. I actively cultivate positive team dynamics, fostering mutual respect, effective communication, and cooperative problem-solving.
            </p>

            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lg:w-4/5 xl:w-full flex items-center justify-start space-x-6"
            >
                <CommonButton
                    cssClasses="scale-on-hover lg:mx-0 w-3/5 lg:w-1/2 xl:w-1/4 text-base"
                    buttonText="Get in touch!"
                    href="mailto:basitbalogun10@gmail.com"
                    marginTop="6"
                    isPrimary={false}
                    useAnchorTag={true}
                    target="_blank"
                    width="1/4"
                />
                <CommonButton
                    cssClasses="scale-on-hover hidden lg:block lg:shrink-0 xl:shrink-initial lg:w-1/2 xl:w-1/4"
                    buttonText="Download my resume"
                    href="/files/Basit Balogun.pdf"
                    marginTop="6"
                    isDownloadButton={true}
                    isPrimary={true}
                    useAnchorTag={true}
                    width="1/4"
                />
            </div>
        </section>
    );
};

export default Hero;
