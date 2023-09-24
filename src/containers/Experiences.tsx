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
            "We showed them what can be built with skills revolving around STEM, hence increasing their passion to pursue a career in STEM",
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
            "Led the web development team in successfully developing a landing page for the congress using HTML, Tailwind CSS and Javascript",
            "Oversaw and facilitated collaborations across web dev team by assigning tasks, reviewing and merging pull requests, and handling deployment on Netlify.",
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
            "As a sole member of the team for a few months, I built a full-stack Django web app as a point of contact between youths looking for mentorship and mentors in the company. Website link below",
            "Implemented secure authentication featuring a robust authentication system and a quick login feature to speed up the process by 3%.",
            "Provided a satisfying User Experience with a smooth, animated user interface using Bootstrap",
            "Enhanced user experience through animated UI, no-reload interactions, and rich WYSIWYG editing for intuitive content creation.",
        ],
        categories: ["all", "full time"],
        projectLiveLink:
            "https://synergynetworkinternational.pythonanywhere.com/",
    },
    {
        type: "full-time",
        role: "Software Engineering Intern",
        organization: "Matt Young Media",
        startDate: "April 2023",
        endDate: "Present",
        contributions: [
            "Initiated and Pioneered a React/TypeScript a doc-status client management tool, utilizing Jest for unit testing and GitHub Actions for CI/CD, to optimize internal processes and reduce build times by at least 10%",
            "Joined and collaborated with a cross-functional Scrum development team of a leads generation and management tool during the critical pre-release stages.",
            "Together with the team, I implemented enhancement features, while fixing subtle and critical bugs and issues, dramatically improving system stability to improve user experience, optimize product quality, and reduce crashes by at least 20% prior to launch.",
            "Provided valuable insights and perspectives targeted at product enhancements/improvements during team discussions and sometimes through written documents, ensuring that customers get optimal value from our service",
            "Fostered highly collaborative relationships across engineering and business teams through extensive networking with staff and fellow interns. Took initiative in engaging individuals from diverse backgrounds, leveraging communication skills to strengthen team dynamics, workflow, and shared success - earning a reputation as an enthusiastic team player.",
            "Demonstrated great attention to detail and continually sought out feedback and self-improvement opportunities through a growth mindset and eagerness to learn with exuded passion and energy",
        ],
        categories: ["all", "full time"],
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
