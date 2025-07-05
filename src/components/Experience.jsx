import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';

const Experience = () => {
  const experiences = [
    {
      company: 'Leucine - AI for Pharma',
      position: 'Senior Software Engineer | Back End Developer',
      location: 'Bengaluru, Karnataka',
      duration: 'April 2023 – Present',
      type: 'Full-time',
      promotion: 'Promoted to Senior Software Engineer in April 2025',
      achievements: [
        'Built analytics dashboard using Node.js and TypeScript, replacing AWS QuickSight and improving data visualization flexibility by 40% while reducing costs',
        'Implemented Azure Active Directory and Okta SSO solutions with OAuth 2.0 and SAML protocols, improving security compliance and reducing user authentication time by 60%',
        'Added Redis caching layer across microservices architecture, implementing caching patterns to optimize API response times by 50% and improve system performance',
        'Led PostgreSQL query optimization using indexing strategies, query analysis, and database partitioning, reducing database response times by 70%',
        'Conducted code reviews for 8+ developers using GitLab CI/CD pipelines, maintaining 95%+ code quality standards while mentoring junior engineers',
        'Worked with product managers and stakeholders in Agile environment to deliver software solutions on time and within budget',
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Azure Active Directory',
        'Okta',
        'OAuth 2.0',
        'SAML',
        'GitLab CI/CD',
        'Microservices',
      ],
    },
    {
      company: 'ZopSmart',
      position: 'Software Engineer II',
      location: 'Bengaluru, Karnataka',
      duration: 'March 2022 – March 2023',
      type: 'Full-time',
      achievements: [
        'Developed and deployed scalable Node.js microservices architecture for McAfee enterprise client, implementing load balancing and auto-scaling to handle 10,000+ concurrent users with 99.9% uptime',
        'Designed robust data layer architecture using PostgreSQL and Knex.js ORM with connection pooling and query optimization, improving data retrieval efficiency by 35% and reducing server response times',
        'Led technical mentorship and guidance for 5 junior developers in Agile development practices, conducting daily standups and sprint planning, achieving 100% project delivery success rate within deadlines',
        'Implemented comprehensive API testing strategies using Postman and automated testing frameworks, ensuring code quality and reducing production bugs by 40%',
      ],
      technologies: [
        'Node.js',
        'PostgreSQL',
        'Knex.js',
        'Microservices',
        'Load Balancing',
        'Auto-scaling',
        'Postman',
        'API Testing',
        'Agile',
      ],
    },
    {
      company: 'Lal10',
      position: 'Software Engineer',
      location: 'Noida, UP',
      duration: 'October 2020 – February 2022',
      type: 'Full-time',
      achievements: [
        'Built and maintained scalable backend systems using Node.js, Express.js, and RESTful API architecture, supporting 5,000+ daily active users with high availability and performance optimization',
        'Optimized MySQL database schemas through indexing, normalization, and query restructuring, improving query performance by 45% and reducing server load during peak traffic',
        'Developed secure payment gateway APIs with encryption and PCI DSS compliance, processing 1,000+ financial transactions daily while ensuring data security and fraud prevention',
        'Created intelligent rule engine using machine learning algorithms for product-artisan matching and deployed Java Spring Boot microservices with Docker containerization for improved scalability',
        'Implemented comprehensive error handling, logging, and monitoring systems to ensure system reliability and facilitate rapid troubleshooting of production issues',
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'RESTful APIs',
        'Java',
        'Spring Boot',
        'Docker',
        'Payment Gateways',
        'PCI DSS',
        'Machine Learning',
      ],
    },
    {
      company: 'MountBlue Technologies',
      position: 'Software Engineer Trainee',
      location: 'Bengaluru, Karnataka',
      duration: 'July 2020 – September 2020',
      type: 'Training',
      achievements: [
        'Developed full-stack Spotify clone application using React.js, Redux for state management, Express.js backend, and MySQL database with complete music streaming functionality, user authentication, and playlist management features',
        'Built comprehensive Project Issue Tracker with full-stack capabilities including user authentication, role-based access control, and real-time updates using React.js frontend and Firebase backend services',
        'Implemented responsive web design principles and modern JavaScript ES6+ features to ensure cross-browser compatibility and optimal user experience across different devices',
      ],
      technologies: [
        'React.js',
        'Redux',
        'Express.js',
        'MySQL',
        'Firebase',
        'JavaScript ES6+',
        'Responsive Design',
        'Authentication',
      ],
    },
    {
      company: 'LiftOff LLC',
      position: 'Software Engineer Trainee',
      location: 'Bengaluru, Karnataka',
      duration: 'February 2020 – June 2020',
      type: 'Training',
      achievements: [
        'Developed secure authentication and comprehensive user profile management features using React.js frontend and Firebase backend, implementing OAuth integration and real-time data synchronization',
        'Completed Data Structures and Algorithms certification from FreeCodeCamp, strengthening problem-solving skills and algorithmic thinking for efficient software development',
        'Participated in code reviews and collaborative development practices, gaining experience in version control with Git and following industry-standard coding conventions',
      ],
      technologies: [
        'React.js',
        'Firebase',
        'OAuth',
        'Git',
        'Data Structures',
        'Algorithms',
        'Code Reviews',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="experience" background="bg-gray-50 dark:bg-gray-900">
      <SectionHeader
        subtitle="My journey"
        title="Work Experience"
        description="5+ years of professional software development experience across various companies and technologies"
      />

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

              <div className="md:ml-16">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold">
                          <HiOfficeBuilding className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        {exp.promotion && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              🎉 {exp.promotion}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1 mb-1">
                          <HiCalendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <HiLocationMarker className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Card className="text-center p-6">
          <CardBody>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </CardBody>
        </Card>

        <Card className="text-center p-6">
          <CardBody>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5
            </div>
            <div className="text-gray-600 dark:text-gray-300">Companies</div>
          </CardBody>
        </Card>

        <Card className="text-center p-6">
          <CardBody>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Delivered
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Experience;
