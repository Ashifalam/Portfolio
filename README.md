# Aquif Zubair - React Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean design, smooth animations, and production-ready code quality.

## 🚀 Live Demo

Visit the live portfolio: [https://aquifzubair.netlify.app/](https://aquifzubair.netlify.app/)

## ✨ Features

- **Modern Design**: Clean, professional UI with dark/light mode toggle
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations and scroll-triggered effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Resume Download**: Direct PDF resume download functionality
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized with Vite for fast loading times

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Additional Libraries
- **React Icons** - Comprehensive icon library
- **EmailJS** - Client-side email functionality
- **React Intersection Observer** - Scroll-triggered animations

### Development Tools
- **ESLint** - Code linting with comprehensive rules
- **Prettier** - Code formatting for consistency
- **PostCSS** - CSS processing with Autoprefixer
- **Husky** - Git hooks for code quality enforcement
- **lint-staged** - Run linters on staged files only

### Testing
- **Vitest** - Fast unit testing framework
- **Testing Library** - React component testing utilities
- **jsdom** - DOM environment for testing

### Code Quality & CI/CD
- **Git Hooks** - Automated pre-commit and pre-push quality checks
- **Error Count Limits** - Prevents regression while allowing gradual improvement
- **Automated Formatting** - Code is automatically formatted on commit

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)

### Check your versions:
```bash
node --version
npm --version
```

### Recommended Node.js versions:
- **Node.js 18.x** (LTS) - Recommended
- **Node.js 20.x** (LTS) - Also supported
- **Node.js 21.x** - Latest features

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/aquifzubair/react-portfolio.git
cd react-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📧 Email Configuration (Optional)

To enable the contact form functionality:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `src/config/emailjs.js` with your credentials:

```javascript
export const emailjsConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
};
```

For detailed setup instructions, see [EMAIL_SETUP.md](EMAIL_SETUP.md)

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Testing
```bash
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ci      # Run tests for CI (verbose output)
npm run test:coverage # Run tests with coverage report
npm run test:ui      # Run tests with UI interface
```

### Combined Commands
```bash
npm run check        # Check formatting + linting
npm run fix          # Fix formatting + linting issues
```

## 🔒 Git Hooks & Code Quality

This project uses **Husky** and **lint-staged** to enforce code quality standards automatically. The Git hooks ensure that all code meets quality standards before being committed or pushed.

### Pre-commit Hook
Runs automatically when you commit changes:
- **ESLint**: Fixes linting issues automatically on staged files
- **Prettier**: Formats code automatically on staged files
- **Fast**: Only processes staged files for quick commits

### Pre-push Hook
Runs automatically when you push to remote:
- **ESLint**: Checks all files for code quality (max 28 errors allowed)
- **Prettier**: Verifies all files are properly formatted
- **Tests**: Runs complete test suite with verbose output
- **Build**: Ensures the project builds successfully

### Error Count Management
- **Current ESLint error limit**: 28 errors maximum
- **Prevents regression**: New errors above the limit will block pushes
- **Encourages improvement**: Allows current state while promoting error reduction
- **Clear feedback**: Shows exact error count vs. allowed limit

### Manual Quality Checks
```bash
# Run all pre-push checks manually
npm run lint && npm run format:check && npm run test:ci && npm run build

# Run pre-commit checks manually
npx lint-staged

# Fix common issues
npm run fix  # Auto-fix formatting and linting issues
```

### Bypassing Hooks (Emergency Only)
```bash
# Skip pre-commit hook (not recommended)
git commit -m "message" --no-verify

# Skip pre-push hook (not recommended)
git push --no-verify
```

**⚠️ Warning**: Only bypass hooks in emergency situations. Always fix issues properly.

For detailed Git hooks documentation, see [GIT_HOOKS_SETUP.md](GIT_HOOKS_SETUP.md)

## 📁 Project Structure

```
react-portfolio/
├── .husky/                          # Git hooks configuration
│   ├── pre-commit                   # Pre-commit quality checks
│   └── pre-push                     # Pre-push quality checks
├── public/
│   ├── Aquif_Zubair_Resume.pdf     # Resume download file
│   ├── favicon.svg                  # Site favicon
│   ├── manifest.json               # PWA manifest
│   ├── robots.txt                  # SEO robots file
│   ├── sitemap.xml                 # SEO sitemap
│   ├── sw.js                       # Service worker
│   └── vite.svg                    # Vite logo
├── src/
│   ├── __tests__/                  # App-level tests
│   │   └── App.test.jsx
│   ├── components/
│   │   ├── __tests__/              # Component tests
│   │   │   ├── About.test.jsx
│   │   │   ├── Button.test.jsx
│   │   │   ├── Card.test.jsx
│   │   │   ├── Contact.test.jsx
│   │   │   ├── Hero.test.jsx
│   │   │   └── Navigation.test.jsx
│   │   ├── About.jsx               # About section
│   │   ├── Button.jsx              # Reusable button component
│   │   ├── Card.jsx                # Reusable card component
│   │   ├── Contact.jsx             # Contact form & info
│   │   ├── Education.jsx           # Education section
│   │   ├── Experience.jsx          # Work experience
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Hero.jsx                # Hero/landing section
│   │   ├── LazySection.jsx         # Lazy loading wrapper
│   │   ├── Navigation.jsx          # Site navigation
│   │   ├── Projects.jsx            # Projects showcase
│   │   ├── Section.jsx             # Reusable section component
│   │   ├── Skills.jsx              # Skills section
│   │   └── index.js                # Component exports
│   ├── config/
│   │   └── emailjs.js              # EmailJS configuration
│   ├── styles/
│   │   └── design-system.js        # Design system constants
│   ├── test/
│   │   └── setup.jsx               # Test environment setup
│   ├── utils/
│   │   ├── performance.js          # Performance utilities
│   │   └── seo.js                  # SEO utilities
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # App entry point
├── .eslintrc.js                    # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── .prettierignore                 # Prettier ignore rules
├── EMAIL_SETUP.md                  # EmailJS setup guide
├── GIT_HOOKS_SETUP.md             # Git hooks documentation
├── package.json                    # Dependencies & scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS config
└── vite.config.js                 # Vite build configuration
```

## 🎨 Customization

### Colors and Themes
The design system is defined in `src/styles/design-system.js` and `tailwind.config.js`. You can customize:

- Color palette
- Typography scales
- Component variants
- Spacing and sizing

### Content
Update the following files to customize content:

- **Personal Info**: `src/components/Hero.jsx`, `src/components/About.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Education**: `src/components/Education.jsx`

### Resume
Replace `public/Aquif_Zubair_Resume.pdf` with your own resume file.

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- **Mobile**: < 768px (hamburger menu, stacked layout)
- **Tablet**: 768px - 1024px (adapted grid layouts)
- **Desktop**: > 1024px (full layout with all features)

## ⚡ Performance

- **Vite**: Fast build times and hot module replacement
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized assets and lazy loading
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Structured data ready

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🐛 Troubleshooting

### Common Issues

**Node.js Version Issues**
```bash
# Use Node Version Manager (nvm) to switch versions
nvm install 18
nvm use 18
```

**Dependency Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Issues**
```bash
# Check for linting errors
npm run lint
npm run format:check
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Contact

**Aquif Zubair**
- Phone: +91 7070742505
- Email: aquifzubair98@gmail.com
- LinkedIn: [linkedin.com/in/aquif-zubair](https://www.linkedin.com/in/aquif-zubair/)
- GitHub: [github.com/aquifzubair](https://github.com/aquifzubair)
- Location: Bangalore, India

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vite](https://vitejs.dev/) - Build tool
- [EmailJS](https://www.emailjs.com/) - Email service

---

**Built with ❤️ by Aquif Zubair**
