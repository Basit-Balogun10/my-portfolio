import React from 'react'

import {FiGithub, FiTwitter, FiLinkedin} from 'react-icons/fi'

import {} from 'react'
import { IconType } from 'react-icons/lib';
interface profilesTypes {
    id: number;
    name: string;
    icon: IconType;
    url: string;
}

const profiles: profilesTypes[] = [
    {
        id: 1,
        name: "GitHub",
        icon: FiGithub,
        url: "",
    },
    {
        id: 2,
        name: "Twitter",
        icon: FiTwitter,
        url: "",
    },
    {
        id: 3,
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "",
    },
];


const SocialMediaProfiles = () => {
    return (
        <>
            <ul className="hidden md:block fixed left-12 bottom-[8.5rem] space-y-8">
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <profile.icon className="w-6 h-6" />
                    </li>
                ))}
            </ul>
            <div className="hidden md:block fixed bottom-0 left-14 h-28 border border-mainColor/70 dark:border-slate-400"></div>
        </>
    );
};

export default SocialMediaProfiles