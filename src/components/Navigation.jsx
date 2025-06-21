import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import Button from './Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
          >
            Aquif Zubair
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.button
                key={item.name}
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              icon={isDark ? HiSun : HiMoon}
              className="!p-2"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              icon={isDark ? HiSun : HiMoon}
              className="!p-2"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              icon={isOpen ? HiX : HiMenu}
              className="!p-2"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Menu */}
              <motion.div
                ref={menuRef}
                className="md:hidden absolute top-full left-4 right-4 bg-white dark:bg-secondary-900 shadow-2xl border border-secondary-200 dark:border-secondary-700 rounded-2xl mt-3 overflow-hidden z-50"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0.0, 0.2, 1],
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                }}
              >
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 rounded-2xl" />

                <div className="relative py-6 px-3">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        className="group relative text-left text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 py-3 px-5 rounded-xl text-sm overflow-hidden"
                        initial={{ opacity: 0, x: -30, rotateX: -15 }}
                        animate={{ opacity: 1, x: 0, rotateX: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.4,
                          ease: [0.4, 0.0, 0.2, 1],
                        }}
                        whileHover={{
                          scale: 1.02,
                          x: 4,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                      >
                        {/* Hover background effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />

                        {/* Animated border */}
                        <motion.div
                          className="absolute inset-0 border border-primary-200/50 dark:border-primary-700/50 rounded-xl opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />

                        {/* Content */}
                        <span className="relative z-10 flex items-center">
                          <motion.span
                            className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          {item.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <motion.div
                    className="mt-4 pt-4 border-t border-secondary-200/50 dark:border-secondary-700/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  >
                    <div className="flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-30" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
