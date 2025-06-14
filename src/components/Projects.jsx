import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle, CardDescription } from './Card';
import Button from './Button';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Analytics Platform',
      description: 'Built a comprehensive analytics platform reducing dependency on QuickSight by 80%. Features real-time data visualization, custom dashboards, and advanced reporting capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'React', 'D3.js'],
      features: [
        'Real-time data processing',
        'Custom dashboard builder',
        'Advanced filtering and aggregation',
        'Export capabilities (PDF, Excel)',
        'Role-based access control'
      ],
      github: '#',
      demo: '#',
      status: 'Production',
      company: 'Leucine Tech'
    },
    {
      title: 'SSO Integration System',
      description: 'Implemented enterprise-grade Single Sign-On solutions supporting Azure AD and Okta. Enhanced security and user experience across multiple applications.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'OAuth 2.0', 'SAML', 'Azure AD', 'Okta'],
      features: [
        'Multi-provider SSO support',
        'Seamless user authentication',
        'Session management',
        'Security compliance (GDPR, SOC2)',
        'Audit logging'
      ],
      github: '#',
      demo: '#',
      status: 'Production',
      company: 'Leucine Tech'
    },
    {
      title: 'Microservices Architecture for McAfee',
      description: 'Developed scalable microservices architecture handling millions of requests. Implemented efficient data layer with PostgreSQL and Knex ORM.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'PostgreSQL', 'Knex.js', 'Docker', 'Kubernetes'],
      features: [
        'High-performance APIs',
        'Auto-scaling capabilities',
        'Database optimization',
        'Monitoring and logging',
        'CI/CD pipeline integration'
      ],
      github: '#',
      demo: '#',
      status: 'Production',
      company: 'Zopsmart'
    },
    {
      title: 'E-commerce Rule Engine',
      description: 'Created an intelligent matching system connecting products with artisans based on skills, availability, and cost optimization algorithms.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'Algorithm Design'],
      features: [
        'Smart matching algorithms',
        'Real-time availability tracking',
        'Cost optimization',
        'Performance analytics',
        'Scalable architecture'
      ],
      github: '#',
      demo: '#',
      status: 'Production',
      company: 'Lal10'
    },
    {
      title: 'Spotify Clone',
      description: 'Full-stack music streaming application with user authentication, playlist management, and real-time music playback functionality.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Redux', 'Express.js', 'MySQL', 'Node.js'],
      features: [
        'User authentication',
        'Music streaming',
        'Playlist management',
        'Search functionality',
        'Responsive design'
      ],
      github: '#',
      demo: '#',
      status: 'Demo',
      company: 'Personal Project'
    },
    {
      title: 'Project Issue Tracker',
      description: 'Comprehensive project management tool with issue tracking, team collaboration, and progress monitoring capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'Socket.io'],
      features: [
        'Issue tracking',
        'Team collaboration',
        'Real-time updates',
        'Progress monitoring',
        'Reporting dashboard'
      ],
      github: '#',
      demo: '#',
      status: 'Demo',
      company: 'Personal Project'
    }
  ];

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
    <Section id="projects">
      <SectionHeader
        subtitle="What I've built"
        title="Featured Projects"
        description="A showcase of my professional work and personal projects demonstrating technical expertise and problem-solving skills"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <HiCode className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{project.title}</p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.company}
                    </p>
                  </div>
                  {project.status === 'Production' && (
                    <HiStar className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  )}
                </div>
              </CardHeader>

              <CardBody className="flex-1 flex flex-col">
                <CardDescription className="mb-4 flex-1">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="p-8">
          <CardBody>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Available
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have worked on 50+ projects 
              ranging from enterprise applications to personal experiments. Each project has 
              taught me valuable lessons and helped me grow as a developer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                icon={FaGithub}
                onClick={() => window.open('https://github.com/aquifzubair', '_blank')}
              >
                View All Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Discuss Your Project
              </Button>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Projects;
