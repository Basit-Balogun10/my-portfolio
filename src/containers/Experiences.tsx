import React, {useState} from "react";

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from "../components/ButtonTabs";
import Experience from "../components/Experience";

import { experienceType } from "../components/Experience";
import { tabType } from "../components/ButtonTabs";

const myExperiences: experienceType[] = [
    {
        type: "volunteering",
        role: "Instructional Facilitator",
        organization: "IEEE Pre-University Ambassadors STEM Programme",
        startDate: "March 2022",
        endDate: "September 2022",
        contributions: [
            "I delivered talks and facilitated hands-on practical projects for students in selected secondary schools in Lagos, Nigeria.",
            "We show them what can be built with skills revolving around STEM, hence increasing their passion to pursue a career in STEM",
        ],
        categories: ["all", "volunteering"],
    },
    {
        type: "volunteering",
        role: "Web Development Lead and Planning Committee Member",
        organization: "IEEE Nigeria Students Congress 2022",
        startDate: "May 2022",
        endDate: "June 2022",
        contributions: [
            "I was part of the committee responsible for managing all the administrative materials and congress registrations",
            "Led the web development team into successfully developing deploying to NETLIFY, a landing page for the congress using HTML, Tailwind CSS and Javascript. GitHub repo link below",
            "I worked with every web development team member, assigning tasks and bringing together the pieces built by each member by managing and merging their Pull Requests on GitHub.",
        ],
        categories: ["all", "volunteering"],
        projectGithubRepo:
            "https://ieee-nigeria-students-congress-2022.netlify.app",
    },
    {
        type: "full-time",
        role: "Web Developer",
        organization: "Synergy Network International",
        startDate: "March 2021",
        endDate: "Jan 2022",
        contributions: [
            "As a sole member of the development team for a few months, using Python, I built a full-stack Django website as a point of contact between youths looking for mentorship and mentors in the company. Website link beow",
            "Built a “Quick Login” feature to display login forms to users and speed up authentication to about 15% faster as they won't have to navigate to the login page.",
            "Provided a satisfying User Experience with a smooth, animated user interface styled with Bootstrap.",
            "Used Jquery and AJAX requests to prevent page reload by blog actions (liking and commenting) for better User Experience.",
        ],
        categories: ["all", "full time"],
        projectLiveLink:
            "https://synergynetworkinternational.pythonanywhere.com/",
    },
];

const tabs: tabType[] = [
    {
        displayName: "All",
        title: "all",
    },
    {
        displayName: "Full-time",
        title: "full time",
    },
    {
        displayName: "Volunteering",
        title: "volunteering",
    },
];

const Experiences = () => {
    const [activeTabItems, setActiveTabItems] =
        useState<experienceType[]>(myExperiences);

    const handleActiveTabChange = (category: string) => {
        console.log(category, "cat");
        const updatedTabItems = myExperiences.filter((experience) =>
            experience.categories.includes(category)
        );
        console.log(updatedTabItems, "uti");
        setActiveTabItems(updatedTabItems);
    };

    return (
        <section id="experience" className="mt-12 mb-14 px-7 lg:px-60">
            {/* <h2 className="relative lg:block flex items-center justify-center mb-8 lg:mb-4 font-comfortaa text-2xl dark:text-white lg:after:block after:absolute after:w-full lg:after:w-[52%] after:mt-6 lg:after:mt-0 lg:after:ml-[31rem] after:bottom-0 lg:after:bottom-auto lg:after:top-1/2  after:border-[1.5px] lg:after:border after:border-mainColor dark:after:border-slate-400 overflow-x-hidden overflow-y-hidden"> */}
            <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
                className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-2xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[35rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden"
            >
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 lg:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    03.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left">
                    And the Experience I've Gained So Far 👌🏾
                </span>
            </h2>

            <ButtonTabs
                tabs={tabs}
                handleActiveTabChange={handleActiveTabChange}
                cssClasses="justify-start space-x-2"
            />

            <div className="lg:px-12 mt-6 space-y-8">
                {activeTabItems.map((experience, index) => (
                    <>
                        <Experience key={index} experience={experience} />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
