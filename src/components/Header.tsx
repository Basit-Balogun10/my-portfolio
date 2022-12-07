import React, { useState, useContext, useRef } from "react";
import { IoMdMoon, IoMdSunny, IoMdClose } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";

import CommonButton from "./CommonButton";
import themeContext from "../contexts/ThemeContext";

interface navItemsType {
    id: number;
    title: string;
}

const navItems: navItemsType[] = [
    {
        id: 1,
        title: "About",
    },
    {
        id: 2,
        title: "Projects",
    },
    {
        id: 3,
        title: "Experience",
    },
    {
        id: 4,
        title: "Contact",
    },
];

const Header = () => {
    const [mobileNav, toggleMobileNav] = useState<boolean>(false);
    const { theme, setTheme, toggleThemeMode } = useContext(themeContext);
    const darkModeToggle = useRef<HTMLDivElement>(null)

    const handleMobileNavToggle = () => {
            let mobileNavOpen = document.querySelector<HTMLElement>(
                ".mobile-nav-open"
            )
            let mobileNavClose = document.querySelector<HTMLElement>(
                ".mobile-nav-close"
            )


            if (mobileNavOpen) {
                if (mobileNavClose)  {
                    console.log('here')
                    mobileNavClose.style.transform = "translateX(60px)"
                    mobileNavOpen.style.transform = "translateX(0px)"
                } else {
                    mobileNavOpen.style.transform = "translateX(60px)";
                }
                setTimeout(() => toggleMobileNav(!mobileNav), 200);
            }
                

            // setTimeout(() => toggleMobileNav(!mobileNav), 200)
            // toggleMobileNav(!mobileNav);
    };


    return (
        <div className="md:static h-12 flex justify-between items-center py-12 px-6 md:px-12">
            {/* BLUR OVERLAY */}
            <div
                id="blur-overlay"
                className={`${
                    mobileNav
                        ? "backdrop-blur-sm z-50 w-full h-full"
                        : "backdrop-blur-none"
                } fixed top-0 left-0`}
            ></div>

            {/* LOGO */}
            <h1 className="flex items-center space-x-2 font-pacifico text-3xl md:text-4xl text-dimmedSecondaryColor dark:text-secondaryColor">
                <FaLaptopCode />
                <span className="theme-toggle font-pacifico">BB</span>
            </h1>

            <nav
                id="nav"
                className="relative flex items-center space-x-4 md:space-x-8"
            >
                {mobileNav && (
                    <IoMdClose
                        className="mobile-nav-close z-[150] fixed md:hidden w-8 h-8 right-6 text-dimmedSecondaryColor dark:text-secondaryColor transition-all ease-in-out"
                        onClick={handleMobileNavToggle}
                    />
                )}
                <ul
                    className={`${mobileNav ? "w-3/4 visible" : "w-0 invisible"}
                            z-[100] h-screen fixed top-0 right-0 flex flex-col items-center justify-center space-y-8 bg-gray-300 dark:bg-lightMainColor
                            md:h-[initial] md:w-[initial] md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:bg-[initial] md:transition-none`}
                >
                    {navItems.map((navItem, index) => (
                        <li
                            key={index}
                            className={`${
                                mobileNav ? "visible" : "invisible"
                            } md:visible flex flex-col md:flex-row items-center justify-center md:space-x-3 text-lg md:text-base cursor-pointer`}
                        >
                            <span className="text-dimmedSecondaryColor dark:text-secondaryColor">
                                0{index + 1}.
                            </span>
                            <span className="hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor hover:underline underline-offset-4">
                                {navItem.title}
                            </span>
                        </li>
                    ))}
                    <CommonButton
                        cssClasses="scale-on-hover md:hidden w-2/3"
                        buttonText="Resume"
                        isPrimary={false}
                        width="1/4"
                    />
                </ul>

                {theme == "light" ? (
                    <IoMdMoon
                        className="theme-toggle w-8 h-8 md:w-8 md:h-8 ml-6 p-1 text-dimmedSecondaryColor dark:text-secondaryColor md:text-mainColor md:dark:text-slate-400 hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor rounded-md cursor-pointer transition-colors ease-in-out"
                        onClick={() => {
                            toggleThemeMode();
                        }}
                    />
                ) : (
                    <IoMdSunny
                        className="theme-toggle w-8 h-8 md:w-8 md:h-8 ml-6 p-1 text-dimmedSecondaryColor dark:text-secondaryColor md:text-mainColor md:dark:text-slate-400 hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor rounded-md cursor-pointer transition-colors ease-in-out"
                        onClick={toggleThemeMode}
                    />
                )}
                <div ref={darkModeToggle}>
                    <AiOutlineMenuFold
                        className="mobile-nav-open md:hidden w-8 h-8 text-dimmedSecondaryColor dark:text-secondaryColor"
                        onClick={handleMobileNavToggle}
                    />
                </div>
                {/* <div className="md:hidden absolute top-0 right-0 h-screen"></div> */}
            </nav>
        </div>
    );
};

export default Header;
