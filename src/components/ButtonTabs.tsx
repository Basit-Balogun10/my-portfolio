import React, { useState } from "react";
import { IconType } from "react-icons/lib";

type tabsType = {
    cssClasses?: string;
    defaultActiveTabIndex?: number;
    tabs: tabType[];
    handleActiveTabChange: (category: string) => void;
};

export type tabType = {
    displayName: string;
    icon?: IconType;
    title: string;
};

const ButtonTabs = ({
    cssClasses,
    defaultActiveTabIndex,
    tabs,
    handleActiveTabChange,
}: tabsType) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(
        defaultActiveTabIndex || 0
    );

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <ul
                className={`${
                    cssClasses ? `${cssClasses}` : ""
                } flex lg:flex-wrap text-center text-gray-500 dark:text-gray-400 after:hidden lg:after:block after:border-b after:w-full after:border-dimmedSecondaryColor dark:after:border-secondaryColor overflow-scroll lg:overflow-hidden`}
            >
                {tabs.map((tab, index) => {
                    return (
                        <li
                            key={index}
                            className={`button-tab relative grow shrink-0 min-w-[6rem] mr-2 mb-4 lg:mb-0 ${
                                activeTabIndex === index
                                    ? "bg-dimmedSecondaryColor dark:bg-secondaryColor"
                                    : "after:block after:absolute after:w-0 after:hover:w-full after:bottom-0 lg:hover:after:border after:border-0 hover:after:border-dimmedSecondaryColor dark:hover:after:border-secondaryColor"
                            } rounded-tl-md rounded-tr-md cursor-pointer
                          `}
                            onClick={() => {
                                setActiveTabIndex(index);
                                handleActiveTabChange(tab.title);
                            }}
                        >
                            <a
                                className={`button-tab-item inline-flex flex-wrap py-2 px-4 font-comfortaa font-bold text-base ${
                                    activeTabIndex === index
                                        ? "text-mainColor"
                                        : "text-mainColor/80 dark:text-slate-400 hover:text-gray-900 dark:hover:text-gray-300 "
                                }  group`}
                            >
                                {tab.icon && <tab.icon />}
                                {tab.displayName}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ButtonTabs;
