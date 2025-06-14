import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders main app structure', () => {
    render(<App />);

    // Check for main app container
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument();
  });

  it('renders navigation component', () => {
    render(<App />);

    // Navigation should be present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<App />);

    // Hero section should be present
    expect(screen.getByText('Aquif Zubair')).toBeInTheDocument();
  });

  it('renders main content area', () => {
    render(<App />);

    // Main element should be present
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders footer component', () => {
    render(<App />);

    // Footer should be present
    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});
