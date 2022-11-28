import React from 'react'

interface profilesTypes {
    id: number;
    name: string;
    icon: string;
    url: string;
}

const profiles: profilesTypes[] = [
    {
        id: 1,
        name: "GitHub",
        icon: "",
        url: ""
    },
    {
        id: 2,
        name: "Twitter",
        icon: "",
        url: ""
    },
    {
        id: 3,
        name: "LinkedIn",
        icon: "",
        url: ""
    },
];


const SocialMediaProfiles = () => {
    return (
        <div className="absolute left-4 bottom-16">
            {profiles.map((profile, index) => (
                <li>profile.name</li>
            ))}
        </div>
    );
};

export default SocialMediaProfiles