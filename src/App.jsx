import React from 'react';
import {
  Navigation,
  Footer,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
} from './components';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
