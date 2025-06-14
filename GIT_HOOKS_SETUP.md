# Git Hooks Setup Documentation

This project uses **Husky** and **lint-staged** to ensure code quality and consistency before commits and pushes.

## 🔧 Setup Overview

### Pre-commit Hook
- **Location**: `.husky/pre-commit`
- **Purpose**: Fast quality checks on staged files only
- **Tools**: ESLint + Prettier via lint-staged

### Pre-push Hook
- **Location**: `.husky/pre-push`
- **Purpose**: Comprehensive quality checks before pushing to remote
- **Tools**: ESLint, Prettier, Tests, Build verification

## 📋 Quality Checks

### Pre-commit (Fast - Staged Files Only)
1. **ESLint**: Fixes linting issues automatically
2. **Prettier**: Formats code automatically
3. **File Types**: 
   - `*.{js,jsx}` → ESLint + Prettier
   - `*.{json,css,md}` → Prettier only

### Pre-push (Comprehensive - All Files)
1. **📋 ESLint**: Checks all JS/JSX files for code quality
2. **🎨 Prettier**: Verifies code formatting consistency
3. **🧪 Tests**: Runs all test suites with verbose output
4. **🏗️ Build**: Ensures the project builds successfully

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run check           # Run format:check + lint
npm run fix             # Run format + lint:fix

# Testing
npm run test            # Run tests in watch mode
npm run test:run        # Run tests once
npm run test:ci         # Run tests for CI (verbose)
npm run test:coverage   # Run tests with coverage
npm run test:ui         # Run tests with UI
```

## ⚡ How It Works

### When you commit:
```bash
git add .
git commit -m "your message"
# → Pre-commit hook runs lint-staged
# → Only staged files are checked and auto-fixed
# → Commit proceeds if no errors
```

### When you push:
```bash
git push origin main
# → Pre-push hook runs comprehensive checks:
#   1. ESLint on all files
#   2. Prettier check on all files  
#   3. All tests must pass
#   4. Build must succeed
# → Push proceeds only if all checks pass
```

## 🛠️ Manual Quality Checks

You can run the same checks manually:

```bash
# Run pre-commit checks manually
npx lint-staged

# Run pre-push checks manually
npm run lint && npm run format:check && npm run test:ci && npm run build
```

## 🔧 Configuration Files

- **Husky**: `.husky/` directory
- **lint-staged**: `package.json` → `lint-staged` section
- **ESLint**: `eslint.config.js`
- **Prettier**: `.prettierrc` and `.prettierignore`

## 🚫 Bypassing Hooks (Not Recommended)

If absolutely necessary, you can bypass hooks:

```bash
# Skip pre-commit hook
git commit -m "message" --no-verify

# Skip pre-push hook  
git push --no-verify
```

**⚠️ Warning**: Only bypass hooks in emergency situations. Always fix issues properly.

## 📝 Benefits

1. **Consistent Code Style**: Prettier ensures uniform formatting
2. **Code Quality**: ESLint catches potential bugs and enforces best practices
3. **Reliable Builds**: Pre-push build check prevents broken deployments
4. **Test Coverage**: Ensures all tests pass before pushing
5. **Team Collaboration**: Everyone follows the same quality standards
6. **Automated Fixes**: Many issues are fixed automatically during commit

## 🔄 Updating Hooks

To modify the hooks, edit the files in `.husky/` directory:
- `.husky/pre-commit` - For commit-time checks
- `.husky/pre-push` - For push-time checks

After editing, make sure they're executable:
```bash
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

## 📞 Contact Information Updated

The contact information has been updated with the correct phone number:
- **Phone**: +91 7070742505
- **Email**: aquifzubair98@gmail.com
- **Location**: Bangalore, India
