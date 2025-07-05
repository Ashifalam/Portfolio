import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiCalendar,
  HiLocationMarker,
  HiStar,
} from 'react-icons/hi';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';

const Education = () => {
  const education = [
    {
      institution: 'Sant Longowal Institute Of Engineering And Technology',
      degree: 'Bachelor of Engineering in Computer Science',
      location: 'Sangrur, Punjab',
      duration: '2016 – 2019',
      grade: '7.2 CGPA',
      status: 'Graduated with good academic standing',
      achievements: [
        'Achieved 7.2 CGPA in Computer Science Engineering',
        'Specialized in Computer Science and Engineering fundamentals',
        'Strong foundation in algorithms, data structures, and software engineering',
        'Developed comprehensive understanding of computer systems and programming',
      ],
      subjects: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies',
        'Object-Oriented Programming',
        'System Design',
      ],
    },
    {
      institution: 'University Polytechnic, Aligarh Muslim University',
      degree: 'Diploma in Electronics Engineering',
      location: 'Aligarh, UP',
      duration: '2012 – 2015',
      grade: '76.6%',
      status: 'Graduated with distinction',
      achievements: [
        'Achieved 76.6% in Electronics Engineering',
        'Strong foundation in electronics and engineering principles',
        'Hands-on experience with electronic circuits and systems',
        'Developed analytical and problem-solving skills',
      ],
      subjects: [
        'Electronic Circuits',
        'Digital Electronics',
        'Microprocessors',
        'Communication Systems',
        'Control Systems',
        'Engineering Mathematics',
        'Circuit Analysis',
        'Electronic Devices',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Data Structures and Algorithms',
      provider: 'FreeCodeCamp',
      year: '2020',
      type: 'Certification',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
    },
    {
      title: 'Node.js Development',
      provider: 'Professional Experience',
      year: '2019-Present',
      type: 'Professional',
      skills: ['Node.js', 'Express.js', 'API Development'],
    },
    {
      title: 'PostgreSQL Database Administration',
      provider: 'Professional Experience',
      year: '2020-Present',
      type: 'Professional',
      skills: ['PostgreSQL', 'Database Design', 'Query Optimization'],
    },
    {
      title: 'Microservices Architecture',
      provider: 'Professional Experience',
      year: '2021-Present',
      type: 'Professional',
      skills: ['Microservices', 'System Design', 'Scalability'],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="education" background="bg-gray-50 dark:bg-gray-900">
      <SectionHeader
        subtitle="Academic background"
        title="Education & Certifications"
        description="My educational journey and continuous learning through certifications and professional development"
      />

      <div className="space-y-12">
        {/* Formal Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Formal Education
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <HiAcademicCap className="h-5 w-5" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <HiCalendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <HiLocationMarker className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-0 text-right">
                        <div className="flex items-center justify-end space-x-2 mb-1">
                          <HiStar className="h-5 w-5 text-yellow-500" />
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {edu.grade}
                          </span>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {edu.status}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
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
                      </div>

                      {/* Relevant Subjects */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Relevant Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Professional Development */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Professional Development
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardBody>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {cert.provider}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.type === 'Certification'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          }`}
                        >
                          {cert.type}
                        </span>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {cert.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <CardBody>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I believe in continuous learning and staying updated with the
                latest technologies. My educational foundation in Computer
                Science, combined with hands-on professional experience, has
                equipped me with both theoretical knowledge and practical
                skills. I regularly participate in online courses, workshops,
                and tech conferences to enhance my expertise and stay current
                with industry trends.
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;
