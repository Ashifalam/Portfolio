import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));

// Loading component with skeleton
const SectionSkeleton = ({ height = 'h-96' }) => (
  <div
    className={`${height} bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg`}
  >
    <div className="p-8 space-y-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

// Intersection Observer based lazy loading
const LazySection = ({ children, fallback, threshold = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '100px', amount: threshold }}
      transition={{ duration: 0.6 }}
    >
      <Suspense fallback={fallback || <SectionSkeleton />}>{children}</Suspense>
    </motion.div>
  );
};

export { LazySection, About, Skills, Experience, Projects, Education, Contact };
