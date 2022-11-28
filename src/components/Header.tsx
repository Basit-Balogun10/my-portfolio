import React, { useContext } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

import CommonButton from "./CommonButton";
import themeContext from "../contexts/ThemeContext"

interface navItemsType {
    id: number;
    title: string;
}

const navItems: navItemsType[] = [
    {
        id: 1,
        title: "about",
    },
    {
        id: 2,
        title: "project",
    },
    {
        id: 3,
        title: "experience",
    },
    {
        id: 4,
        title: "contact",
    },
];

const Header = () => {
    const { theme, setTheme, toggleThemeMode } = useContext(themeContext);

    return (
        <div className="flex-row justify-between items-center">
            {/* LOGO */}
            <img />

            <nav>
                <ul>
                    {navItems.map((navItem, index) => (
                        <li>navItem.title</li>
                    ))}
                    {theme == "light" ? (
                        <IoMdMoon
                            className={`w-8 h-8 ml-6 p-1 ${
                                !displayNavBar && displayLogo
                                    ? "dark:text-white text-ourBlack hover:bg-red-200/50 dark:hover:bg-gray-100/50"
                                    : "text-white hover:bg-gray-100/50"
                            } hover:bg-gray-100/50 rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    ) : (
                        <IoMdSunny
                            className={`w-8 h-8 ml-6 p-1 ${
                                !displayNavBar && displayLogo
                                    ? "dark:text-white text-ourBlack hover:bg-gray-500 dark:hover:bg-gray-100/50"
                                    : "text-white hover:bg-gray-100/50"
                            } rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
