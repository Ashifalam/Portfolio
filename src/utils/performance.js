// Performance monitoring utilities for production optimization

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Core Web Vitals
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        // Log performance metrics (can be sent to analytics)
        console.log(`${entry.name}: ${entry.value}ms`);
      });
    });

    // Observe paint timings
    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

    // Track First Input Delay
    const fidObserver = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        console.log(
          `First Input Delay: ${entry.processingStart - entry.startTime}ms`,
        );
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.as = 'style';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images (if any)
    const resumeLink = document.createElement('link');
    resumeLink.rel = 'prefetch';
    resumeLink.href = '/Ashif_Alam_Resume.pdf';
    document.head.appendChild(resumeLink);
  }
};

// Optimize images with lazy loading
export const optimizeImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Memory optimization
export const optimizeMemory = () => {
  // Clean up event listeners on unmount
  const cleanupFunctions = [];

  const addCleanup = cleanup => {
    cleanupFunctions.push(cleanup);
  };

  const runCleanup = () => {
    cleanupFunctions.forEach(cleanup => cleanup());
    cleanupFunctions.length = 0;
  };

  return { addCleanup, runCleanup };
};

// Bundle size analyzer (development only)
export const analyzeBundleSize = () => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle analysis available in production build');
    console.log('Run: npm run build && npx vite-bundle-analyzer dist');
  }
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0];

    const metrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded:
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart,
      firstPaint:
        performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint:
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ||
        0,
    };

    // Performance budgets (in milliseconds)
    const budgets = {
      loadTime: 3000,
      domContentLoaded: 1500,
      firstPaint: 1000,
      firstContentfulPaint: 1500,
    };

    // Check if metrics exceed budgets
    Object.keys(metrics).forEach(metric => {
      if (metrics[metric] > budgets[metric]) {
        console.warn(
          `Performance budget exceeded for ${metric}: ${metrics[metric]}ms (budget: ${budgets[metric]}ms)`,
        );
      } else {
        console.log(
          `✅ ${metric}: ${metrics[metric]}ms (within budget: ${budgets[metric]}ms)`,
        );
      }
    });

    return metrics;
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Track web vitals
  trackWebVitals();

  // Preload critical resources
  preloadCriticalResources();

  // Optimize images
  optimizeImages();

  // Check performance budget (after page load)
  window.addEventListener('load', () => {
    setTimeout(checkPerformanceBudget, 1000);
  });
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  // eslint-disable-next-line no-undef
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};
