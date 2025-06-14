import '@testing-library/jest-dom';
import { vi, afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Setup DOM environment
beforeEach(() => {
  // Create a proper DOM environment
  if (!document.body) {
    document.body = document.createElement('body');
  }

  // Clear any existing content
  document.body.innerHTML = '';

  // Add a root div for React to mount to
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => (
      <section {...props}>{children}</section>
    ),
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    form: ({ children, ...props }) => <form {...props}>{children}</form>,
    input: ({ children, ...props }) => <input {...props}>{children}</input>,
    textarea: ({ children, ...props }) => (
      <textarea {...props}>{children}</textarea>
    ),
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  send: vi.fn(() => Promise.resolve({ status: 200 })),
}));

// Mock react-icons to ensure they render properly
vi.mock('react-icons/hi', () => ({
  HiMail: props => (
    <svg data-testid="hi-mail" {...props}>
      <title>Mail</title>
    </svg>
  ),
  HiPhone: props => (
    <svg data-testid="hi-phone" {...props}>
      <title>Phone</title>
    </svg>
  ),
  HiLocationMarker: props => (
    <svg data-testid="hi-location" {...props}>
      <title>Location</title>
    </svg>
  ),
  HiPaperAirplane: props => (
    <svg data-testid="hi-paper-airplane" {...props}>
      <title>Send</title>
    </svg>
  ),
  HiMoon: props => (
    <svg data-testid="hi-moon" {...props}>
      <title>Moon</title>
    </svg>
  ),
  HiSun: props => (
    <svg data-testid="hi-sun" {...props}>
      <title>Sun</title>
    </svg>
  ),
  HiMenu: props => (
    <svg data-testid="hi-menu" {...props}>
      <title>Menu</title>
    </svg>
  ),
  HiX: props => (
    <svg data-testid="hi-x" {...props}>
      <title>Close</title>
    </svg>
  ),
  HiDownload: props => (
    <svg data-testid="hi-download" {...props}>
      <title>Download</title>
    </svg>
  ),
  HiChevronDown: props => (
    <svg data-testid="hi-chevron-down" {...props}>
      <title>Chevron Down</title>
    </svg>
  ),
}));

vi.mock('react-icons/fa', () => ({
  FaLinkedin: props => (
    <svg data-testid="fa-linkedin" {...props}>
      <title>LinkedIn</title>
    </svg>
  ),
  FaGithub: props => (
    <svg data-testid="fa-github" {...props}>
      <title>GitHub</title>
    </svg>
  ),
  FaTwitter: props => (
    <svg data-testid="fa-twitter" {...props}>
      <title>Twitter</title>
    </svg>
  ),
}));

// Mock intersection observer
// eslint-disable-next-line no-undef
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
// eslint-disable-next-line no-undef
global.localStorage = localStorageMock;

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock ResizeObserver
// eslint-disable-next-line no-undef
global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock performance API
// eslint-disable-next-line no-undef
global.performance = {
  // eslint-disable-next-line no-undef
  ...global.performance,
  getEntriesByType: vi.fn(() => []),
  getEntriesByName: vi.fn(() => []),
};

// Mock PerformanceObserver
// eslint-disable-next-line no-undef
global.PerformanceObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
}));
