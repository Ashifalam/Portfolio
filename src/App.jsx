import { useEffect } from 'react';
import { Navigation, Footer, Hero } from './components';
import { LazySection, About, Skills, Experience, Projects, Education, Contact } from './components/LazySection';
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
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Education />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
