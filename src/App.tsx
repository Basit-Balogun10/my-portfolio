import { useState, useEffect } from 'react'

import About from './containers/About'
import Hero from './containers/Hero'
import Contact from './containers/Contact'
import SocialMediaLinks from './components/SocialMediaProfiles'
import { ThemeProvider } from './contexts/ThemeContext'
import Experiences from './containers/Experiences'
import Projects from './containers/Projects'

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
          <div className="App">
              <div className="fixed right-4 bottom-16">
                  <p>basitbalogun10@gmail.com</p>
              </div>
              <SocialMediaLinks />


              <Hero />
              <About />
              <Projects />
              <Experiences />
              <Contact />
          </div>
      </ThemeProvider>
  );
}

export default App
