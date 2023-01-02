import React from "react";
import { MdWavingHand } from "react-icons/md";

import CommonButton from "../components/CommonButton";

const Hero = () => {
    return (
        <section className="my-20 px-7 lg:px-44">
            {/* GREETING */}
            <div className="space-y-4 lg:space-y-8 lg:text-left">
                <h4 className="font-pacifico lg:ml-2 text-dimmedSecondaryColor dark:text-secondaryColor text-xl tracking-wide lg:tracking-widest">
                    Hello there
                    <MdWavingHand className="inline mx-2 text-2xl text-amber-800" />{" "}
                    My name is...
                </h4>
                <div className="space-y-2 lg:space-y-0">
                    <h1 className="font-comfortaa font-black lg:font-extrabold text-4xl lg:text-[5rem] dark:text-gray-300 tracking-wide lg:tracking-normal lg:leading-[6rem]">
                        Basit Balogun.
                    </h1>
                    <h2 className="font-pacifico lg:font-comfortaa mb-3 lg:font-extrabold text-3xl lg:text-[4rem] xl:text-[5rem] lg:tracking-normal lg:leading-[5rem] opacity-70">
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
            <p className="lg:text-left lg:w-4/5 xl:w-[55%] mt-4 lg:mt-12 mb-6 lg:mb-4 lg:text-lg opacity-70">
                I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at Upstatement.
            </p>

            <div className="lg:w-4/5 xl:w-full flex items-center justify-start space-x-6">
                <CommonButton
                    cssClasses="scale-on-hover lg:mx-0 w-3/5 lg:w-1/2 xl:w-1/4 text-base"
                    buttonText="Get in touch!"
                    marginTop="6"
                    isPrimary={false}
                    width="1/4"
                />
                <CommonButton
                    cssClasses="scale-on-hover hidden lg:block lg:shrink-0 xl:shrink-initial lg:w-1/2 xl:w-1/4"
                    buttonText="Download my resume"
                    marginTop="6"
                    isPrimary={true}
                    width="1/4"
                />
            </div>
        </section>
    );
};

export default Hero;
