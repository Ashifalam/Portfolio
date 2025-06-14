// Core Components
export { default as Button } from './Button';
export {
  default as Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
} from './Card';
export { default as Navigation } from './Navigation';
export { default as Footer } from './Footer';
export { default as Section, SectionHeader } from './Section';

// Page Sections
export { default as Hero } from './Hero';
export { default as About } from './About';
export { default as Skills } from './Skills';
export { default as Experience } from './Experience';
export { default as Projects } from './Projects';
export { default as Education } from './Education';
export { default as Contact } from './Contact';

// Re-export design system utilities
export {
  getButtonClasses,
  getCardClasses,
  getInputClasses,
  animations,
} from '../styles/design-system';
