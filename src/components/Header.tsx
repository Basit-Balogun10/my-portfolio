import React, { useState, useContext, useRef } from "react";
import { IoMdMoon, IoMdSunny, IoMdClose } from "react-icons/io";
import { FiMail } from "react-icons/fi";
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
        title: "Recommendations",
    },
];

const Header = () => {
    const [mobileNav, toggleMobileNav] = useState<boolean>(false);
    const { theme, setTheme, toggleThemeMode } = useContext(themeContext);
    const darkModeToggle = useRef<HTMLDivElement>(null);

    const handleMobileNavToggle = () => {
        let mobileNavOpen =
            document.querySelector<HTMLElement>(".mobile-nav-open");
        let mobileNavClose =
            document.querySelector<HTMLElement>(".mobile-nav-close");

        if (mobileNavOpen) {
            if (mobileNavClose) {
                console.log("here");
                mobileNavClose.style.transform = "translateX(60px)";
                mobileNavOpen.style.transform = "translateX(0px)";
            } else {
                mobileNavOpen.style.transform = "translateX(60px)";
            }
            setTimeout(() => toggleMobileNav(!mobileNav), 200);
        }

        // setTimeout(() => toggleMobileNav(!mobileNav), 200)
        // toggleMobileNav(!mobileNav);
    };

    return (
        <div className="lg:static h-12 flex justify-between items-center py-12 px-6 lg:px-12">
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
            <h1
                data-aos="fade-right"
                data-aos-duration="500"
                className="flex items-center space-x-2 font-pacifico text-3xl lg:text-4xl text-dimmedSecondaryColor dark:text-secondaryColor"
            >
                <FaLaptopCode />
                <span className="theme-toggle font-pacifico">BB</span>
            </h1>

            <nav
                id="nav"
                className="relative flex items-center space-x-4 lg:space-x-8"
            >
                {mobileNav && (
                    <IoMdClose
                        className="mobile-nav-close z-[150] fixed lg:hidden w-8 h-8 right-6 text-dimmedSecondaryColor dark:text-secondaryColor transition-all ease-in-out"
                        onClick={handleMobileNavToggle}
                    />
                )}
                <ul
                    data-aos={`${!mobileNav ? "fade-left" : ""}`}
                    data-aos-duration={`${!mobileNav ? "1000" : ""}`}
                    className={`${mobileNav ? "w-3/4 visible" : "w-0 invisible"}
                            z-[100] h-screen fixed top-0 right-0 flex flex-col items-center justify-end space-y-8 bg-gray-300 dark:bg-lightMainColor
                            lg:h-[initial] lg:w-[initial] lg:static lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:bg-[initial] lg:transition-none`}
                >
                    {navItems.map((navItem, index) => (
                        <li
                            key={index}
                            className={`${
                                mobileNav ? "visible" : "invisible"
                            } lg:visible flex flex-col lg:flex-row items-center justify-center lg:space-x-3 text-lg lg:text-sm cursor-pointer lg:tracking-wide`}
                        >
                            <span className="text-dimmedSecondaryColor dark:text-secondaryColor">
                                0{index + 1}.
                            </span>
                            <span
                                onClick={() => {
                                    mobileNav &&
                                        handleMobileNavToggle();
                                }}
                            >
                                <a
                                    href={`/#${navItem.title.toLowerCase()}`}
                                    className="hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor hover:underline underline-offset-4"
                                >
                                    {navItem.title}
                                </a>
                            </span>
                        </li>
                    ))}
                    {/* FORCED STYLES HAPPENING HERE THROUGH THE USE OF '!', space-y- style on ul overwrite the margin styles below without the '!' */}
                    <div className="!mt-40 !mb-2 space-y-6 text-center">
                        <CommonButton
                            cssClasses="scale-on-hover lg:hidden w-2/3 px-10"
                            buttonText="Resume"
                            href="/files/Basit Balogun.pdf"
                            isDownloadButton={true}
                            isPrimary={false}
                            useAnchorTag={true}
                            width="1/4"
                        />
                        <div className="lg:hidden flex items-center space-x-2 text-lg">
                            <FiMail />
                            <p className="tracking-wide">
                                <a href="mailto:basitbalogun10@gmail.com" target="_blank" className="hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor">basitbalogun10@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </ul>

                {theme == "light" ? (
                    <IoMdMoon
                        data-aos="fade-left"
                        data-aos-duration="500"
                        className="theme-toggle w-8 h-8 lg:w-8 lg:h-8 ml-6 p-1 text-dimmedSecondaryColor dark:text-secondaryColor lg:text-mainColor lg:dark:text-slate-400 hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor rounded-md cursor-pointer transition-colors ease-in-out"
                        onClick={() => {
                            toggleThemeMode();
                        }}
                    />
                ) : (
                    <IoMdSunny
                        data-aos="fade-left"
                        data-aos-duration="500"
                        className="theme-toggle w-8 h-8 lg:w-8 lg:h-8 ml-6 p-1 text-dimmedSecondaryColor dark:text-secondaryColor lg:text-mainColor lg:dark:text-slate-400 hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor rounded-md cursor-pointer transition-colors ease-in-out"
                        onClick={toggleThemeMode}
                    />
                )}
                <div ref={darkModeToggle}>
                    <AiOutlineMenuFold
                        data-aos="fade-left"
                        data-aos-duration="500"
                        className="mobile-nav-open lg:hidden w-8 h-8 text-dimmedSecondaryColor dark:text-secondaryColor"
                        onClick={handleMobileNavToggle}
                    />
                </div>
                {/* <div className="lg:hidden absolute top-0 right-0 h-screen"></div> */}
            </nav>
        </div>
    );
};

export default Header;
