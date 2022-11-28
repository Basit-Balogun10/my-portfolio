import React from 'react'

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from '../components/ButtonTabs';
import Experience from '../components/Experience';

import { experienceType } from '../components/Experience';
import { tabType } from '../components/ButtonTabs';

const myExperiences: experienceType[] = [
    {
        type: "full-time",
        role: "Engineer",
        organization: "Upstatement",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
    {
        type: "volunteering",
        role: "Engineer",
        organization: "IEEE Nigeria Students Congress",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
    {
        type: "volunteering",
        role: "Engineer",
        organization: "Synergy Network International",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
];

const tabs: tabType[]= [
  {
    title: "Full-time",
    isActive: false,
    icon: <IoMdMoon />
  },
  {
    title: "Volunteering",
    isActive: true,
    icon: <IoMdSunny />
  },
]

const Experiences = () => {
  return (
      <section>
          <h4>Rhetorical question?</h4>
          <h2>Where I've worked</h2>

          <ButtonTabs tabs={tabs}/>

          {
            myExperiences.map((experience, index) => (
              <Experience key={index} experience={experience} />
            ))
          }
      </section>
  );
}

export default Experiences