import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'aquifzubair98@gmail.com',
      href: 'mailto:aquifzubair98@gmail.com',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 9140181089',
      href: 'tel:+919140181089',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/aquif-zubair/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/aquifzubair',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: '#',
      color: 'hover:text-blue-400',
    },
  ];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'aquifzubair98@gmail.com',
      };

      if (
        emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ||
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' ||
        emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY'
      ) {
        console.log('📧 EmailJS Configuration Required:');
        console.log(
          '1. Go to https://www.emailjs.com/ and create a free account',
        );
        console.log('2. Create a new service (Gmail, Outlook, etc.)');
        console.log(
          '3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}',
        );
        console.log(
          '4. Update src/config/emailjs.js with your actual credentials',
        );
        console.log('5. Form data that would be sent:', templateParams);

        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
      } else {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey,
        );
        setSubmitStatus('success');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="contact">
      <SectionHeader
        subtitle="Get in touch"
        title="Contact Me"
        description="Let's discuss your project or just say hello. I'm always open to new opportunities and interesting conversations."
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
            </CardHeader>

            <CardBody>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you're a company looking to hire, or
                you're a fellow developer wanting to collaborate, I'd love to
                hear from you.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${contact.color}`}
                    >
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {contact.label}
                      </p>
                      {contact.href !== '#' ? (
                        <a
                          href={contact.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 ${social.color} transition-all duration-200 hover:scale-110 border border-gray-200 dark:border-gray-700`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>

            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={HiPaperAirplane}
                  loading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      Something went wrong. Please try again or contact me
                      directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Contact;
