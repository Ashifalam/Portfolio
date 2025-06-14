
import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';

const Experience = () => {
  const experiences = [
    {
      company: 'Leucine Tech',
      position: 'Software Engineer (Node.js)',
      location: 'Bengaluru, Karnataka',
      duration: 'March 2023 – Present',
      type: 'Full-time',
      achievements: [
        'Designed and implemented dynamic analytics, reducing dependency on QuickSight and improving data visualisation flexibility',
        'Successfully implemented Azure and Okta Single Sign-On (SSO) solutions, enhancing security and ease of access for users',
        'Integrated Redis across the application to optimize API response time and enhance performance',
        'Spearheaded several query optimization projects in PostgreSQL, significantly reducing response times and enhancing overall system performance',
        'Played a crucial role in code reviews, providing constructive feedback to team members and maintaining code quality standards',
      ],
      technologies: [
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Azure',
        'Okta',
        'QuickSight',
      ],
    },
    {
      company: 'Zopsmart',
      position: 'Software Engineer',
      location: 'Bengaluru, Karnataka',
      duration: 'March 2022 – March 2023',
      type: 'Full-time',
      achievements: [
        'Developed scalable Node.js microservices for McAfee',
        'Designed and implemented data layer using Postgres and Knex as the ORM',
        'Collaborated with the client and other team members to turn requirements into code and deliver high-quality software on time',
        'Leading a team of five junior developers, providing technical guidance and training to ensure successful project completion',
      ],
      technologies: [
        'Node.js',
        'PostgreSQL',
        'Knex.js',
        'Microservices',
        'Team Leadership',
      ],
    },
    {
      company: 'Lal10',
      position: 'Software Engineer',
      location: 'Noida, UP',
      duration: 'October 2020 – February 2022',
      type: 'Full-time',
      achievements: [
        'Built backend systems using Node.js and Express',
        'Designed efficient MySQL schemas and optimized queries',
        'Developed APIs for integration with payment gateways and third-party systems',
        'Created a rule engine matching products to artisans based on skills, availability, and cost',
        'Developed and deployed multiple microservices using Java Spring Boot',
      ],
      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'Java',
        'Spring Boot',
        'Payment Gateways',
      ],
    },
    {
      company: 'Mountblue',
      position: 'Software Engineer - Trainee',
      location: 'Bengaluru, Karnataka',
      duration: 'June 2020 – September 2020',
      type: 'Training',
      achievements: [
        'Developed a Spotify clone using React, Redux, Express, and MySQL',
        'Built a Project Issue Tracker with full-stack capabilities',
        'Gained extensive experience in full-stack development',
        'Worked effectively in an agile development environment',
      ],
      technologies: [
        'React',
        'Redux',
        'Express.js',
        'MySQL',
        'Full-stack Development',
      ],
    },
    {
      company: 'LiftOff',
      position: 'Associate Software Engineer',
      location: 'Bengaluru, Karnataka',
      duration: 'January 2019 – June 2020',
      type: 'Full-time',
      achievements: [
        'Developed authentication and profile features using React and Firebase',
        'Completed Data Structures and Algorithms certification from FreeCodeCamp',
        'Developed responsive and user-friendly frontend interfaces',
        'Collaborated with team members to implement best practices',
      ],
      technologies: ['React', 'Firebase', 'JavaScript', 'Frontend Development'],
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
