import React from 'react';
import { motion } from 'framer-motion';
import {
  SiNodedotjs,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiRedis,
  SiDocker,
  SiGit,
  SiMongodb,
  SiApachekafka,
} from 'react-icons/si';
import { HiServer, HiDatabase, HiCode, HiCog, HiCloud } from 'react-icons/hi';
import Section, { SectionHeader } from './Section';
import Card, { CardBody, CardHeader, CardTitle } from './Card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: HiServer,
      color:
        'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 95 },
        { name: 'Express.js', icon: SiExpress, level: 90 },
        { name: 'Koa.js', icon: HiServer, level: 75 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Kafka', icon: SiApachekafka, level: 70 },
      ],
    },
    {
      title: 'Databases',
      icon: HiDatabase,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
        { name: 'Redis', icon: SiRedis, level: 80 },
        { name: 'MySQL', icon: SiPostgresql, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 60 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: HiCode,
      color:
        'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'React.js', icon: SiReact, level: 80 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: HiCog,
      color:
        'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 75 },
        { name: 'AWS', icon: HiCloud, level: 70 },
        { name: 'Git', icon: SiGit, level: 90 },
      ],
    },
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="skills">
      <SectionHeader
        subtitle="What I'm good at"
        title="Skills & Technologies"
        description="A comprehensive overview of my technical expertise and proficiency levels"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>

              <CardBody>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Summary */}
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
              Core Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Specialized in building scalable backend systems with Node.js and
              PostgreSQL. Experienced in microservices architecture, API
              development, database optimization, and enterprise-level
              integrations.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Microservices',
                'API Development',
                'Database Design',
                'Performance Optimization',
                'System Architecture',
                'Code Reviews',
                'Team Leadership',
                'Agile Development',
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Section>
  );
};

export default Skills;
