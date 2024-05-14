import { useEffect, useState } from 'react';

import About from './components/About';
import Divider from './components/Divider';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    function handleTheme() {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <>
            <div className="relative h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-[-18%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>
            <Navbar theme={theme} handleTheme={handleTheme} />
            <Hero />
            <Divider text="About Me" />
            <About />
            <Technologies theme={theme} />
            <Divider text="Experience" />
            <Experience />
            <Divider text="Projects" />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
