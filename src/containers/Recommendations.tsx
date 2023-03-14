import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import Recommendation, { recommendationType } from "../components/Recommendation";


const recommendations: recommendationType[] = [
    {
        recommender: "German Cousillas Martinez",
        recommenderPosition:
            "Former IT Director, Synergy Network International",
        text: "As Synergy Network International's former IT director, I knew Basit would be a valuable asset for our organisation since the day I met him. His eagerness to constantly develop himself and nurture his knowledge have taken him from being an ordinary LeetCode problem-solver to mastering several technologies which he now employs both in his professional and personal projects. Alongside this, his kindness and respect towards every single member of the organisation quickly allowed Basit to integrate himself in our family. He is, indeed, a four-leave clover for whomever is lucky enough to have him in their team.",
        recommenderMedia: [
            {
                link: "https://www.linkedin.com/in/germ%C3%A1n-cousillas-mart%C3%ADnez-5b0903241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPh7McEK0QRiBk8C%2BG%2Bgdlw%3D%3D",
                icon: FiLinkedin,
            },
        ],
    },
    {
        recommender: "James Makanjuola",
        recommenderPosition: "Football Coach at A.J.M Elite Coaching",
        text: "Basit helped create a website for my football coaching company. I was amazed by the standard and the quality of the website he was able to create for my brand. Basit is a great communicator and does exactly what you ask of him. I fully recommend anybody to try Basit and his quality work. You will not regret it.",
        recommenderMedia: [
            {
                link: "https://instagram.com/a.j.m_elite_coaching/",
                icon: FiInstagram,
            },
            {
                link: "https://www.linkedin.com/in/james-makanjuola-005455182?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPh7McEK0QRiBk8C%2BG%2Bgdlw%3D%3D",
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
