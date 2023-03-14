import { useState, useEffect } from "react";
import "animate.css/animate.min.css"

import About from "./containers/About";
import Hero from "./containers/Hero";
import Contact from "./containers/Contact";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import Experiences from "./containers/Experiences";
import Projects from "./containers/Projects";
import Recommendations from "./containers/Recommendations";

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        Aos.init();
        if (
            localStorage.getItem("basit-portfolio-theme") === "dark" ||
            (!("basit-portfolio-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleThemeMode = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("basit-portfolio-theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("basit-portfolio-theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <ThemeProvider value={{ theme, setTheme, toggleThemeMode }}>
            <div className="App">
                <div className="hidden lg:block">
                    <p className="fixed -right-[3.2rem] bottom-56 rotate-90 tracking-wider">
                        <a href="mailto:basitbalogun10@gmail.com" target="_blank" className="fixed-email hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor">basitbalogun10@gmail.com</a>
                    </p>
                    <div className="fixed bottom-0 right-14 h-28 border border-mainColor/70 dark:border-slate-400"></div>
                </div>
                <SocialMediaLinks />

                <Header />
                <Hero />
                <About />
                <Projects />
                <Experiences />
                <Recommendations />
                <Contact />
                <div className="font-comfortaa w-full mx-auto text-center">
                    <p><a href="https://github.com/bchiang7/v4" className="text-xs hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor">Design inspiration from Brittany Chiang</a></p>
                    <p><a href="https://github.com/Basit-Balogun10" className="text-xs hover:text-dimmedSecondaryColor dark:hover:text-secondaryColor">Built by Basit Balogun</a></p>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
