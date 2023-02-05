import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import Recommendation, { recommendationType } from "../components/Recommendation";


const recommendations: recommendationType[] = [
    {
        recommender: "German Cousillas Martinez",
        recommenderPosition:
            "Former IT Director, Synergy Network International",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias voluptatum magnam nesciunt! Quae, magnam non. Nemo officiis ducimus inventore fugiat maiores suscipit architecto aliquid temporibus veniam, amet repellat ipsa!",
        recommenderMedia: [
            {
                link: "https://instagram.com/a.j.m_elite_coaching/",
                icon: FiLinkedin,
            },
        ],
    },
    {
        recommender: "James Makanjuola",
        recommenderPosition: "Football Coach at A.J.M Elite Coaching",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias voluptatum magnam nesciunt! Quae, magnam non. Nemo officiis ducimus inventore fugiat maiores suscipit architecto aliquid temporibus veniam, amet repellat ipsa!",
        recommenderMedia: [
            {
                link: "https://instagram.com/a.j.m_elite_coaching/",
                icon: FiInstagram,
            },
            {
                link: "https://instagram.com/a.j.m_elite_coaching/",
                icon: FiLinkedin,
            },
        ],
    },
];

const Recommendations = () => {
    return (
        <section id="recommendations" className="my-14 px-7 lg:px-60">
            <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[28rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden"
            >
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    04.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left tracking-wide">
                    How About Some Recommendation?
                </span>
            </h2>

            {recommendations.map((recommendation, index) => (
                <>
                    <Recommendation
                        key={index}
                        recommendation={recommendation}
                    />
                </>
            ))}
        </section>
    );
};

export default Recommendations;
