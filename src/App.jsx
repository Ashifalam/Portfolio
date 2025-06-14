import React from 'react';
import { Navigation, Footer, Hero } from './components';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
