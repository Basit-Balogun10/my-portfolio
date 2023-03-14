import React from "react";

import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

import {} from "react";
import { IconType } from "react-icons/lib";
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
        url: "https://github.com/Basit-Balogun10",
    },
    {
        id: 2,
        name: "Twitter",
        icon: FiTwitter,
        url: "https://twitter.com/basit_balogun10",
    },
    {
        id: 3,
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/basit-balogun-3668a9220/",
    },
];

const SocialMediaLinks = () => {
    return (
        <>
            <ul className="hidden lg:block fixed left-12 bottom-[8.5rem] space-y-8">
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <a href={profile.url} target="_blank">
                            <profile.icon className="social-media-icon fixed-ele w-6 h-6 hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor" />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:block fixed bottom-0 left-14 h-28 border border-mainColor/70 dark:border-slate-400"></div>
        </>
    );
};

export default SocialMediaLinks;
