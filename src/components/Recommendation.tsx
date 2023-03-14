import React from "react";
import { IconType } from "react-icons/lib";

interface propsType {
    recommendation: recommendationType;
}

export interface recommendationType {
    recommender: string;
    recommenderPosition: string;
    text: string;
    recommenderMedia: {
        link: string;
        icon: IconType;
    }[];
}

const Recommendation = ({ recommendation }: propsType) => {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="w-full lg:w-2/3 my-12 mx-auto min-h-[14rem] p-6 space-y-6 border-2 border-mainColor dark:border-slate-400 rounded-md shadow-md"
        >
            <div>
                <div className="flex items-center justify-center space-x-4 lg:w-3/5 lg:mx-auto mb-2">
                    <h3 className="font-comfortaa text-lg lg:text-xl dark:text-gray-300">
                        {recommendation.recommender}
                    </h3>
                    <div className="flex items-center justify-start space-x-2">
                        {recommendation.recommenderMedia.map((media, index) => (
                            <a href={media.link}>
                                <media.icon className="w-6 h-6 mb-1 text-dimmedSecondaryColor dark:text-secondaryColor" />
                            </a>
                        ))}
                    </div>
                </div>
                <p className="font-comfortaa italic text-xs lg:text-sm text-center">
                    {recommendation.recommenderPosition}
                </p>
            </div>
            <p className="text-center">"{recommendation.text}"</p>
        </div>
    );
};

export default Recommendation;
