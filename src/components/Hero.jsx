import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiChevronDown } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Software Engineer',
    'Backend Developer',
    'Node.js Expert',
    'System Architect',
    'Full Stack Developer',
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = sectionId => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-secondary-200 dark:bg-secondary-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-4"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            <span className="text-gradient">Aquif Zubair</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div className="mb-8" variants={itemVariants}>
            <p className="text-xl md:text-2xl lg:text-3xl text-secondary-700 dark:text-secondary-300">
              I'm a{' '}
              <motion.span
                key={currentRole}
                className="text-primary-600 dark:text-primary-400 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Passionate about building scalable backend solutions and robust
            applications. Specializing in Node.js, PostgreSQL, and microservices
            architecture with 5+ years of experience delivering high-performance
            systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={HiDownload}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Aquif_Zubair_Resume.pdf';
                link.download = 'Aquif_Zubair_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/aquif-zubair/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/aquifzubair"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </motion.a>

            <motion.a
              href="mailto:aquifzubair98@gmail.com"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiMail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">
              Scroll to explore
            </p>
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiChevronDown className="h-6 w-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
