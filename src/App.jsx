import { useEffect } from 'react';
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
import { updateSEO, seoData } from './utils/seo';

function App() {
  useEffect(() => {
    // Initialize with home page SEO
    updateSEO(seoData.home);

    // Set up intersection observer for section-based SEO updates
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionKey = sectionId === 'home' ? 'home' : sectionId;

          if (seoData[sectionKey]) {
            updateSEO(seoData[sectionKey]);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

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
