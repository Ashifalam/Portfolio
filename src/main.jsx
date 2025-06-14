import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { initializePerformanceOptimizations, registerServiceWorker } from './utils/performance';

// Initialize performance optimizations
initializePerformanceOptimizations();

// Register service worker for caching
registerServiceWorker();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
