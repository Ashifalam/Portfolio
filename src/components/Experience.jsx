import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';

const Experience = () => {
  const experiences = [
    {
      company: 'ZopSmart (Kroger)',
      position: 'Software Developer',
      location: 'Bengaluru, Karnataka',
      duration: 'August 2024 – Present',
      type: 'Full-time',
      // promotion: 'Promoted to Senior Software Engineer in April 2025',
      achievements: [
        'Worked on API automation using Rest Assured, Karate Framework as well as UI automation using Selenium',
        'Designed and executed comprehensive test suites to ensure reliability, functionality, and performance of backend APIs',
        'Developed automated scripts for user interaction simulations, ensuring consistent behavior across browsers and platforms',
        'Collaborated with development teams to identify and resolve testing bottlenecks',
        'Implemented robust testing frameworks to improve software quality and reduce manual testing efforts',
      ],
      technologies: [
        'Rest Assured',
        'Karate Framework',
        'Selenium',
        'API Testing',
        'UI Automation',
        'Java',
      ],
    },
    {
      company: 'Anand Neuburg Diagnostic Laboratory',
      position: 'Data Science Intern',
      location: 'Remote',
      duration: 'April 2023 – August 2023',
      type: 'Internship',
      achievements: [
        'Developed an application using machine learning and deep learning to address challenges in interpreting laboratory test results',
        'Focused on TyphifastICT cards or strips for positive or negative classification, reducing human error and false positives',
        'Analyzed varied image orientations and implemented segmentation for multi-card identification in images',
        'Implemented a solution incorporating Roboflow, YOLOv8, and advanced preprocessing/model-building algorithms',
        'Enhanced accuracy, reduced human error, and enabled robust analysis of test bands including segmentation in images with multiple cards',
      ],
      technologies: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'YOLOv8',
        'Roboflow',
        'Computer Vision',
        'Image Processing',
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
        description="Professional software development experience with expertise in automation testing and machine learning applications"
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
                        {/* {exp.promotion && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              🎉 {exp.promotion}
                            </span>
                          </div>
                        )} */}
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
              1+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </CardBody>
        </Card>

        <Card className="text-center p-6">
          <CardBody>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2
            </div>
            <div className="text-gray-600 dark:text-gray-300">Companies</div>
          </CardBody>
        </Card>

        <Card className="text-center p-6">
          <CardBody>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
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
