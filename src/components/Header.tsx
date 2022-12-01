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
        title: "About",
    },
    {
        id: 2,
        title: "Project",
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
    const { theme, setTheme, toggleThemeMode } = useContext(themeContext);

    return (
        <div className="h-12 flex justify-between items-center py-12 px-12">
            {/* LOGO */}
            <h1>LOGO</h1>

            <nav>
                <ul className="flex justify-start items-center space-x-6">
                    {navItems.map((navItem, index) => (
                        <li key={index}>{navItem.title}</li>
                    ))}
                    {theme == "light" ? (
                        <IoMdMoon
                            className="w-8 h-8 ml-6 p-1 dark:text-white text-ourBlack hover:bg-gray-100/50 rounded-md cursor-pointer transition-colors ease-in-out"
                            onClick={toggleThemeMode}
                        />
                    ) : (
                        <IoMdSunny
                            className="w-8 h-8 ml-6 p-1 rounded-md cursor-pointer transition-colors ease-in-out"
                            onClick={toggleThemeMode}
                        />
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
