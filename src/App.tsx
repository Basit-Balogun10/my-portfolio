import { useState, useEffect } from 'react'

import About from './containers/About'
import Hero from './containers/Hero'
import Contact from './containers/Contact'
import SocialMediaLinks from './components/SocialMediaProfiles'
import { ThemeProvider } from './contexts/ThemeContext'
import Experiences from './containers/Experiences'

function App() {
const [theme, setTheme] = useState<string>("light");

useEffect(() => {
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
        setTheme("light")
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("basit-portfolio-theme", "dark");
        setTheme("dark")
    }
};

  return (
      <ThemeProvider value={{ theme, setTheme, toggleThemeMode }}>
          <div className="App dark:bg-mainColor dark:text-white scroll-smooth">
              <div className="absolute right-4 bottom-16">
                  <p>basitbalogun10@gmail.com</p>
              </div>

              <SocialMediaLinks />

              <Hero />
              <About />
              <Experiences />
              <Contact />
              <button
                  className="bg-red-500 dark:bg-blue-500"
                  onClick={toggleThemeMode}
              >
                  CHANGE THEME
              </button>
          </div>
      </ThemeProvider>
  );
}

export default App

// todo: make theme button in header functional and remove dummy button in App.tsx
// todo: keep track of active button tab where necessary
// todo: write layout for projects archive page