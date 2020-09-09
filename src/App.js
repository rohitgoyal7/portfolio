import React from "react";
import AppHeader from "./components/AppHeader";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Awards from "./pages/Awards";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <main>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Awards />
                <Education />
                <Contact />
            </main>
        </div>
    );
}

export default App;
