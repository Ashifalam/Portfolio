import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ashif-alam-396521207/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/ashifalam',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: '#',
      color: 'hover:text-blue-400',
    },
  ];

  const contactInfo = [
    {
      icon: HiMail,
      text: 'ashifalam470@gmail.com',
      href: 'mailto:ashifalam470@gmail.com',
    },
    {
      icon: HiPhone,
      text: '+91 7667053598',
      href: 'tel:+917667053598',
    },
    {
      icon: HiLocationMarker,
      text: 'Bangalore, India',
      href: '#',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ashif Alam
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md">
              Software Developer specializing in Python, Machine Learning, and
              AI technologies. Passionate about building intelligent
              applications and automation solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-secondary-400 ${social.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  {contact.href !== '#' ? (
                    <a
                      href={contact.href}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-secondary-300">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ashif Alam. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <button className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
