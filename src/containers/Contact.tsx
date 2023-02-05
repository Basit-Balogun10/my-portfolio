import React from "react";
import { FaSmileWink } from "react-icons/fa";

import CommonButton from "../components/CommonButton";

const Contact = () => {
    return (
        <section
            data-aos="fade-down"
            data-aos-duration="1000"
            id="contact"
            className="my-20 px-7 lg:px-60 lg:w-[85%] lg:mx-auto space-y-6 text-center before:block before:w-1/2 before:mx-auto before:mb-12 before:border before:border-mainColor dark:before:border-dimmedSecondaryColor dark:before:border-secondaryColor"
        >
            <div className="space-y-4 lg:space-y-6">
                <h4 className="font-comfortaa text-dimmedSecondaryColor dark:text-secondaryColor text-sm lg:text-lg">
                    Got one or two questions to ask? 🤔
                </h4>
                <h2 className="space-x-2 font-comfortaa font-extrabold dark:text-gray-300 text-[1.65rem] lg:text-5xl">
                    <span>
                        My Inbox Is Wide Open{" "}
                        <span className="hidden lg:inline">😉</span>
                    </span>
                </h2>
            </div>

            <div className="space-y-10">
                <p>
                    Whether you'd like to say "Hi" or want me to provide answers
                    to some questions you have, you can always reach out to me
                    through my email. Ciao!
                </p>
                <CommonButton
                    buttonText="Let's Talk"
                    cssClasses="scale-on-hover font-comfortaa w-1/2 lg:w-[35%]"
                    isPrimary={false}
                />
            </div>
        </section>
    );
};

export default Contact;
